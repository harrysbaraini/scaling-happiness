import {Command} from '@oclif/core'
import {execComposeCommand} from '../utils/docker'

export default class Up extends Command {
  static description = 'Start the containers as defined in Docker Compose file located in current directory'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    this.log('Starting containers...')

    execComposeCommand('up -d', {})
  }
}
