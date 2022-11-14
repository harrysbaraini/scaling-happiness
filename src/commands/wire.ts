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

      this.log(`>>> Processing ${container.Names.join('/')} [${container.Id}]`)

      const allUpstreams = container.Ports.filter((port: Port) => port.PublicPort)

      for (const domain of container.Labels['com.kirschd.domains'].split(',')) {
        const hostParts = domain.split('@')
        const pureDomain = <string>hostParts[0].split('://').pop()
        if (hostParts[0].startsWith('http://')) {
          httpsSkips.push(pureDomain)
        }

        const upstreams = hostParts.length > 1
          ? allUpstreams.filter((up) => up.PrivatePort.toString() === hostParts[1].toString())
          : [allUpstreams[0]];

        this.log(`\t${pureDomain} -> ${upstreams.map(up => `${up.IP}:${up.PublicPort}`)}`)

        caddyRoutes.push({
          terminal: true,
          match: [{ host: [pureDomain] }],
          handle: [
            {
              handler: 'reverse_proxy',
              upstreams: upstreams.map((up) => ({dial: `${up.IP}:${up.PublicPort}`})),
            }
          ]
        })
      }
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
