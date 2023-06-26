---
id: config
title: Configuration
description: Configuration guide for AliveDB
---

AliveDB can be configured using command line args or env vars. Command line args takes precedence over env vars. Alternative to env vars, a `.env` file may also be specified.

## General

|Argument|Env Var|Description|Default|
|-|-|-|-|
|`--data_dir`|`ALIVEDB_DATA_DIR`|Directory for GunDB database|radata|
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

## Token Auth

|Argument|Env Var|Description|Default|
|-|-|-|-|
|`--require_access_token`|`ALIVEDB_REQUIRE_ACCESS_TOKEN`|Require access token for push streams. Useful for public endpoints.|false|
|`--hive_api`|`ALIVEDB_HIVE_API`|Hive API node used for token auth||
|`--auth_timeout_blocks`|`ALIVEDB_AUTH_TIMEOUT_BLOCKS`|Required recency (in blocks)|20|
|`--auth_identifier`|`ALIVEDB_AUTH_IDENTIFIER`|Auth identifier string|alivedb_login|
|`--auth_token_expiry`|`ALIVEDB_AUTH_TOKEN_EXPIRY`|Access token validity period (in seconds)|86400|

:::note
`auth_identifier` should ideally be unique to your service.
:::