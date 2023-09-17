---
id: config
title: Configuration
description: Configuration guide for HAlive
---

HAlive may be configured using command-line arguments, a `.env` file followed by environment variables in that priority order.

|Argument|Env Var|Description|Default|
|-|-|-|-|
|--postgres-url|`HALIVE_POSTGRES_URL`|PostgreSQL connection string to the HAF database||
|--http-host|`HALIVE_HTTP_HOST`|HTTP host for Express API|127.0.0.1|
|--http-port|`HALIVE_HTTP_PORT`|HTTP port for Express API|3010|
|--ipfs-gateway|`HALIVE_IPFS_GATEWAY`|IPFS gateway for fetching chunk contents|https://ipfs.io|
|--alivedb-url|`HALIVE_ALIVEDB_URL`|AliveDB API URL|http://localhost:3006|
|--chunk-fetch-timeout|`HALIVE_CHUNK_FETCH_TIMEOUT`|Timeout for fetching chunk contents over IPFS gateway|20|
|--log-level|`HALIVE_LOG_LEVEL`|Log level (warn/info/debug/trace)|info|