import {Command, Flags} from '@oclif/core'
import {execComposeCommand} from '../utils/docker'

export default class Down extends Command {
  static description = 'Stop the containers as defined in Docker Compose file located in current directory'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    this.log('Stopping containers...')

    execComposeCommand('down', {})
  }
}
