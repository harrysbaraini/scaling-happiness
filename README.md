kirschd
=================

Kirschd CLI

Just a small CLI to help me with local Docker environments:

- It makes easy to execute commands inside containers.
- It starts a Caddy server and proxy domains to containers.

How? It just read container labels to know what to do.

Checkout the `docker-compose-sample.yml` in this repository.

---

## Try it!

Clone this repository, `npm install`, `npm run build` and `npm link`.

Start the Caddy server:
`kirschd start`

Proxy domains to containers:
`kirschd wire`

Run container commands:
`kirschd c {the-command}`

---

TODO...

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g kirschd
$ kirschd COMMAND
running command...
$ kirschd (--version)
kirschd/0.0.0 darwin-x64 node-v17.7.2
$ kirschd --help [COMMAND]
USAGE
  $ kirschd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kirschd hello PERSON`](#kirschd-hello-person)
* [`kirschd hello world`](#kirschd-hello-world)
* [`kirschd help [COMMAND]`](#kirschd-help-command)
* [`kirschd plugins`](#kirschd-plugins)
* [`kirschd plugins:install PLUGIN...`](#kirschd-pluginsinstall-plugin)
* [`kirschd plugins:inspect PLUGIN...`](#kirschd-pluginsinspect-plugin)
* [`kirschd plugins:install PLUGIN...`](#kirschd-pluginsinstall-plugin-1)
* [`kirschd plugins:link PLUGIN`](#kirschd-pluginslink-plugin)
* [`kirschd plugins:uninstall PLUGIN...`](#kirschd-pluginsuninstall-plugin)
* [`kirschd plugins:uninstall PLUGIN...`](#kirschd-pluginsuninstall-plugin-1)
* [`kirschd plugins:uninstall PLUGIN...`](#kirschd-pluginsuninstall-plugin-2)
* [`kirschd plugins update`](#kirschd-plugins-update)

## `kirschd hello PERSON`

Say hello

```
USAGE
  $ kirschd hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/harrysbaraini/kirschd/blob/v0.0.0/dist/commands/hello/index.ts)_

## `kirschd hello world`

Say hello world

```
USAGE
  $ kirschd hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ kirschd hello world
  hello world! (./src/commands/hello/world.ts)
```

## `kirschd help [COMMAND]`

Display help for kirschd.

```
USAGE
  $ kirschd help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for kirschd.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `kirschd plugins`

List installed plugins.

```
USAGE
  $ kirschd plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ kirschd plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `kirschd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kirschd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ kirschd plugins add

EXAMPLES
  $ kirschd plugins:install myplugin 

  $ kirschd plugins:install https://github.com/someuser/someplugin

  $ kirschd plugins:install someuser/someplugin
```

## `kirschd plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ kirschd plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ kirschd plugins:inspect myplugin
```

## `kirschd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kirschd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ kirschd plugins add

EXAMPLES
  $ kirschd plugins:install myplugin 

  $ kirschd plugins:install https://github.com/someuser/someplugin

  $ kirschd plugins:install someuser/someplugin
```

## `kirschd plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ kirschd plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ kirschd plugins:link myplugin
```

## `kirschd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kirschd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kirschd plugins unlink
  $ kirschd plugins remove
```

## `kirschd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kirschd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kirschd plugins unlink
  $ kirschd plugins remove
```

## `kirschd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kirschd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kirschd plugins unlink
  $ kirschd plugins remove
```

## `kirschd plugins update`

Update installed plugins.

```
USAGE
  $ kirschd plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
