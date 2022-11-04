import {Dictionary} from './dictionary'

export interface CaddyHttpAppRouteMatch {
  host: string[],
}

export interface CaddyHttpAppRouteHandle {
  handler: string,
  upstreams: Dictionary<string>[],
  headers?: Dictionary<unknown>,
}

export interface CaddyHttpAppRoute {
  terminal: boolean,
  match: CaddyHttpAppRouteMatch[],
  handle: CaddyHttpAppRouteHandle[],
}

export interface CaddyAutomaticHttps {
  disable: boolean,
  skip: string[],
}

export interface CaddyHttpAppServer {
  listen: string[],
  routes: CaddyHttpAppRoute[],
  automatic_https: CaddyAutomaticHttps,
}

export interface CaddyHttpApp {
  servers: Dictionary<CaddyHttpAppServer>,
}

export interface CaddyApps {
  http?: CaddyHttpApp,
}

export interface CaddyAdmin {
  listen: string,
}

export interface CaddyConfig {
  admin: CaddyAdmin,
  apps: CaddyApps
}
