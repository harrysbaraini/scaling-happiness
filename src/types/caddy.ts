import {Dictionary} from './dictionary'

export interface CaddyHttpAppRouteMatch {
  host: string[],
}

export interface CaddyHttpAppRouteHandle {
  handler: string,
  upstreams: Dictionary<string>[],
  headers?: Dictionary<unknown>,
  transport?: Dictionary<unknown>,
}

export interface CaddyHttpAppRoute {
  terminal: boolean,
  match: CaddyHttpAppRouteMatch[],
  handle: CaddyHttpAppRouteHandle[],
}

export interface CaddyTlsPolicy {
  match: Dictionary<unknown>,
  certificate_selection: Dictionary<unknown>,
}

export interface CaddyCertificate {
  certificate: string,
  key: string,
  tags: string[],
}

export interface CaddyAutomaticHttps {
  disable: boolean,
  skip: string[],
}

export interface CaddyHttpAppServer {
  listen: string[],
  routes: CaddyHttpAppRoute[],
  automatic_https: CaddyAutomaticHttps,
  tls_connection_policies: CaddyTlsPolicy[],
}

export interface CaddyHttpApp {
  servers: Dictionary<CaddyHttpAppServer>,
}

export interface CaddyTlsCertificatesConfig {
  load_files: CaddyCertificate[],
}

export interface CaddyTlsApp {
  certificates: CaddyTlsCertificatesConfig,
}

export interface CaddyApps {
  tls?: Dictionary<unknown>,
  http?: CaddyHttpApp,
}

export interface CaddyAdmin {
  listen: string,
}

export interface CaddyConfig {
  admin: CaddyAdmin,
  apps: CaddyApps
}
