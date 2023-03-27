---
id: config
title: Configuration
description: Configuration guide for AliveDB
---

AliveDB can be configured using command line args or env vars. Command line args takes precedence over env vars. Alternative to env vars, a `.env` file may also be specified.

|Argument|Env Var|Description|Default|
|-|-|-|-|
|`--data_dir`|`ALIVEDB_DATA_DIR`|Directory for GunDB database|.radata|
|`--peers`|`ALIVEDB_PEERS`|List of bootstrap peers *(comma-seperated)*||
|`--http_port`|`ALIVEDB_HTTP_PORT`|HTTP port|3006|
|`--gun_port`|`ALIVEDB_GUN_PORT`|Gun P2P port|3007|
|`--chat_listener`|`ALIVEDB_CHAT_LISTENER`|Stream link for AliveDB chat participant auto-authorization. Format: `network/username/link`||
|`--login_id`|`ALIVEDB_LOGIN_ID`|User ID for login on startup||
|`--login_pub`|`ALIVEDB_LOGIN_PUB`|Public key for login on startup||
|`--login_password`|`ALIVEDB_LOGIN_PASSWORD`|Password for login on startup||

:::note
`login_pub` will be ignored if `login_id` is specified.
:::