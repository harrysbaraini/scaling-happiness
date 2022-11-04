import {Command} from '@oclif/core'
import {spawn} from 'node:child_process'
import {isRunning} from '../utils/caddy'
import {exec} from 'node:child_process'

const CADDY_PATH = 'bin/caddy'

export default class Start extends Command {
  static description = 'Start the proxy container'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}
  static args = []

  private getCaddyPath(): string {
    return `${this.config.root}/${CADDY_PATH}`
  }

  public async run(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const caddyBin = `${this.getCaddyPath()}/caddy`
      const caddyConfig = `${this.getCaddyPath()}/Caddyfile`

      const running = await isRunning()

      if (running) {
        this.log('Stop Caddy if running...')
        await exec(`${caddyBin} stop`)
      }

      this.log('Starting Caddy...')
      const caddy = spawn(caddyBin, ['start', '--config', caddyConfig], {
        detached: true,
        stdio: 'ignore',
        env: {
          ...process.env,
          user: '0:0',
        },
      })

      caddy.on('error', err => {
        reject(err)
      })

      caddy.on('close', () => {
        this.log('Caddy started!')
        resolve()
      })
    })
  }
}
