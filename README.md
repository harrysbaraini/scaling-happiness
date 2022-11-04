oclif-hello-world
=================

oclif example Hello World CLI

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
$ npm install -g podboxer
$ podboxer COMMAND
running command...
$ podboxer (--version)
podboxer/0.0.0 darwin-x64 node-v17.7.2
$ podboxer --help [COMMAND]
USAGE
  $ podboxer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`podboxer hello PERSON`](#podboxer-hello-person)
* [`podboxer hello world`](#podboxer-hello-world)
* [`podboxer help [COMMAND]`](#podboxer-help-command)
* [`podboxer plugins`](#podboxer-plugins)
* [`podboxer plugins:install PLUGIN...`](#podboxer-pluginsinstall-plugin)
* [`podboxer plugins:inspect PLUGIN...`](#podboxer-pluginsinspect-plugin)
* [`podboxer plugins:install PLUGIN...`](#podboxer-pluginsinstall-plugin-1)
* [`podboxer plugins:link PLUGIN`](#podboxer-pluginslink-plugin)
* [`podboxer plugins:uninstall PLUGIN...`](#podboxer-pluginsuninstall-plugin)
* [`podboxer plugins:uninstall PLUGIN...`](#podboxer-pluginsuninstall-plugin-1)
* [`podboxer plugins:uninstall PLUGIN...`](#podboxer-pluginsuninstall-plugin-2)
* [`podboxer plugins update`](#podboxer-plugins-update)

## `podboxer hello PERSON`

Say hello

```
USAGE
  $ podboxer hello [PERSON] -f <value>

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

_See code: [dist/commands/hello/index.ts](https://github.com/harrysbaraini/podboxer/blob/v0.0.0/dist/commands/hello/index.ts)_

## `podboxer hello world`

Say hello world

```
USAGE
  $ podboxer hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ podboxer hello world
  hello world! (./src/commands/hello/world.ts)
```

## `podboxer help [COMMAND]`

Display help for podboxer.

```
USAGE
  $ podboxer help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for podboxer.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `podboxer plugins`

List installed plugins.

```
USAGE
  $ podboxer plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ podboxer plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `podboxer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ podboxer plugins:install PLUGIN...

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
  $ podboxer plugins add

EXAMPLES
  $ podboxer plugins:install myplugin 

  $ podboxer plugins:install https://github.com/someuser/someplugin

  $ podboxer plugins:install someuser/someplugin
```

## `podboxer plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ podboxer plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ podboxer plugins:inspect myplugin
```

## `podboxer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ podboxer plugins:install PLUGIN...

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
  $ podboxer plugins add

EXAMPLES
  $ podboxer plugins:install myplugin 

  $ podboxer plugins:install https://github.com/someuser/someplugin

  $ podboxer plugins:install someuser/someplugin
```

## `podboxer plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ podboxer plugins:link PLUGIN

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
  $ podboxer plugins:link myplugin
```

## `podboxer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ podboxer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ podboxer plugins unlink
  $ podboxer plugins remove
```

## `podboxer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ podboxer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ podboxer plugins unlink
  $ podboxer plugins remove
```

## `podboxer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ podboxer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ podboxer plugins unlink
  $ podboxer plugins remove
```

## `podboxer plugins update`

Update installed plugins.

```
USAGE
  $ podboxer plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
