---
id: config
title: Configuration
description: Configuration guide for HAlive
---

HAlive may be configured using command-line arguments, a `.env` file followed by environment variables in that priority order.

|Argument|Env Var|Description|Default|
|-|-|-|-|
|--postgres_url|`HALIVE_POSTGRES_URL`|PostgreSQL connection string to the HAF database||
|--http_host|`HALIVE_HTTP_HOST`|HTTP host for Python REST API server|127.0.0.1|
|--http_port|`HALIVE_HTTP_PORT`|HTTP port for Python REST API server|3010|
|--ipfs_gateway|`HALIVE_IPFS_GATEWAY`|IPFS gateway for fetching chunk contents|https://ipfs.io|
|--alivedb_url|`HALIVE_ALIVEDB_URL`|AliveDB API URL|http://localhost:3006|
|--chunk_fetch_timeout|`HALIVE_CHUNK_FETCH_TIMEOUT`|Timeout for fetching chunk contents over IPFS gateway|20|
|--log_level|`HALIVE_LOG_LEVEL`|Log level (warn/info/debug/trace)|info|