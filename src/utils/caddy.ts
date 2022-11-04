import {RawAxiosRequestHeaders} from 'axios'
import {Dictionary} from '../types/dictionary'
import {CaddyConfig} from '../types/caddy'
const axios = require('axios')

async function callApi<T = Dictionary<unknown> | undefined | null>(path = '/', data = '', method = 'POST'): Promise<T> {
  return axios.request({
    method,
    url: `http://127.0.0.1:2019${path}`,
    headers: <RawAxiosRequestHeaders>{
      'Content-Type': 'application/json',
    },
    data,
  })
}

export async function isRunning(): Promise<boolean> {
  return new Promise(resolve => {
    callApi('/config').then(() => resolve(true)).catch(() => resolve(false))
  })
}

export async function loadConfig(config: CaddyConfig): Promise<void> {
  await callApi('/load', JSON.stringify(config))
}

