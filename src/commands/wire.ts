import {Command} from '@oclif/core'
import {listContainers} from '../utils/docker'
import {Port} from 'dockerode'
import {CaddyConfig, CaddyHttpAppRoute} from '../types/caddy'
import {Dictionary} from '../types/dictionary'
import Start from './start'
import {isRunning, loadConfig} from '../utils/caddy'

export default class Wire extends Command {
  static description = 'Generate the proxy configuration from docker containers'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}
  static args = [{name: 'service'}]

  async run(): Promise<void> {
    this.log('Grabbing ports information from docker...')

    const {args} = await this.parse(Wire)
    const labels = ['com.kirschd.domains']

    if (args.service) {
      labels.push(`com.docker.compose.service=${args.service}`)
    }

    const containers = await listContainers(labels)
    const caddyRoutes: CaddyHttpAppRoute[] = []
    const httpsSkips: string[] = []

    for (const container of containers) {
      if (container.State !== 'running') {
        continue
      }

      this.log(`Processing ${container.Names.join('/')} [${container.Id}]`)

      const upstreams = container.Ports
      .filter((port: Port) => port.PublicPort)
      .map((port: Port): Dictionary<string> => ({
        dial: `${port.IP}:${port.PublicPort}`,
      }))

      const hosts: string[] = []

      for (const domain of container.Labels['com.kirschd.domains'].split(',')) {
        const host = <string>domain.split('://').pop()
        if (domain.startsWith('http://')) {
          httpsSkips.push(host)
        }

        hosts.push(host)
      }

      caddyRoutes.push({
        terminal: true,
        match: [{host: hosts}],
        handle: [
          {
            handler: 'reverse_proxy',
            upstreams: upstreams,
          },
        ],
      })
    }

    const caddyConfig: CaddyConfig = {
      admin: {listen: '0.0.0.0:2019'},
      apps: {
        http: {
          servers: {
            srv0: {
              listen: [':80', ':443'],
              automatic_https: {
                disable: false,
                skip: httpsSkips,
              },
              routes: caddyRoutes,
            },
          },
        },
      },
    }

    if (!await isRunning()) {
      this.log('Caddy is not running')
      await Start.run()
    }

    this.log('Registering routes')
    await loadConfig(caddyConfig)
  }
}
