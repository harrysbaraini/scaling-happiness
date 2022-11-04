import {Command} from '@oclif/core'
import {execComposeCommand, listContainers} from '../utils/docker'

export default class Cmd extends Command {
  static description = 'Run a command defined in the docker-compose.yml'

  static strict = false

  static aliases = ['c']

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'cmd', required: true}]

  public async run(): Promise<void> {
    const {args, argv} = await this.parse(Cmd)

    const path = process.cwd()
    const cmdLabel = `com.kirschd.cmd.${args.cmd}`

    await listContainers([
      `com.docker.compose.project.working_dir=${path}`,
      cmdLabel,
    ], 1).then(containers => {
      if (containers.length === 0) {
        return
      }

      const serviceName = containers[0].Labels['com.docker.compose.service']
      const cmdString = containers[0].Labels[cmdLabel]
      const user = containers[0].Labels[`${cmdLabel}.user`] || containers[0].Labels['com.kirschd.user'] || `${process.getuid()}:${process.getgid()}`

      const cmdParams = argv.slice(1).join(' ')
      const fullCmd = `${cmdString} ${cmdParams}`

      this.log(`Running ${fullCmd}...`)
      execComposeCommand(`exec -u ${user}`, {
        service: serviceName,
        serviceCmd: fullCmd,
      })
    })
  }
}
