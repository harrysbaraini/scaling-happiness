import * as Docker from 'dockerode'
import {ContainerInfo} from 'dockerode'
import * as fs from 'node:fs'
import {spawn} from 'node:child_process'
import {Dictionary} from '../types/dictionary'

const socketPath = process.env.DOCKER_SOCKET || '/var/run/docker.sock'
let dockerInstance: Docker | undefined

function getDocker(): Docker {
  if (dockerInstance) {
    return dockerInstance
  }

  const stats = fs.statSync(socketPath)
  if (!stats.isSocket()) {
    throw new Error('Are you sure the docker is running?')
  }

  dockerInstance = new Docker({
    socketPath,
  })

  return dockerInstance
}

export async function listContainers(labels: string[], limit: number | null = null): Promise<ContainerInfo[]> {
  return new Promise((resolve, reject) => {
    const opts = {
      limit,
      filters: JSON.stringify({
        label: labels,
      }),
    }

    getDocker().listContainers(opts, (err, containers) => {
      if (err) {
        return reject(err)
      }

      if (!containers) {
        resolve([])
        return
      }

      resolve(containers)
    })
  })
}

export interface ExecComposeCommandOptions {
  service?: string,
  serviceCmd?: string,
  env?: Dictionary<string>,
}

export function execComposeCommand(command: string, options: ExecComposeCommandOptions): void {
  const args: string[] = [
    'compose',
    ...command.split(' '),
    options.service || '',
    options.serviceCmd || '',
  ]

  spawn('docker', args, {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      GID: process.getgid().toString(),
      UID: process.getuid().toString(),
      ...options.env,
    },
  })
}
