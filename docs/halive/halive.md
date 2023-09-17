---
id: halive
title: HAlive
description: HAF-based Alive Protocol streams indexer and API server.
---

HAF-based Alive Protocol streams indexer and API server. Indexes Hive from a starting block number for Alive-related `custom_json` operations using the HAF app sync algorithm.

## Required Dependencies

* `nodejs` and `npm` (Latest LTS, v18 minimum supported)
* Synced [HAF](https://gitlab.syncad.com/hive/haf) node

A locally-running IPFS daemon is recommended for faster chunk fetching.

## Database Setup

:::info
Applicable to both standalone and Docker installations.
:::

### PostgreSQL Roles
```sql
CREATE ROLE halive_app WITH LOGIN PASSWORD 'halivepass' CREATEROLE INHERIT IN ROLE hive_applications_group;
CREATE ROLE halive_user WITH LOGIN INHERIT IN ROLE hive_applications_group;
GRANT CREATE ON DATABASE block_log_testnet TO halive_app;
GRANT halive_user TO halive_app;
```

### PostgREST API methods
```bash
psql -f src/sql/create_apis.sql block_log
```

## Standalone Installation

:::note
This section describes the steps for a standalone installation, i.e., setting up the application without using Docker containers. If you prefer to use Docker, please refer to the [Docker Installation](#docker-installation) section.
:::

### Clone and Install
```bash
git clone https://github.com/aliveprotocol/HAlive
cd HAlive
npm i
npm run compile
./scripts/postgrest_install.sh
```

Then configure HAlive [here](/docs/halive/config).

### Usage

#### Start HAF indexer
```bash
npm start
```

:::info
Run `npm run dev` instead to start a ts-node dev server without compiling after making any changes.
:::

#### Start PostgREST server
```bash
./scripts/postgrest_start.sh postgres://halive_app:<halive_app_password>@localhost:5432/block_log <server_port>
```
Replace `<halive_app_password>` with the password of `halive_app` role.

#### Start Express server
```bash
npm run server
```
Listens to `http://127.0.0.1:3010` unless specified otherwise in [config](/docs/halive/config).

:::info
Run `npm run dev-server` instead to start a ts-node dev server without compiling after making any changes.
:::

## Docker Installation

### Build Docker Images
```bash
git clone https://github.com/aliveprotocol/HAlive
cd HAlive
docker build -t halive_sync --target halive_sync .
docker build -t halive_server --target halive_server .
```

Then configure HAlive [here](/docs/halive/config) using the `.env` file.

### Run Containers

#### Start HAF indexer
```bash
docker run -d --rm --network host --name halive-sync --env-file .env halive_sync
```

#### Start Express server
```bash
docker run -d --rm --network host --name halive-server --env-file .env halive_server
```

#### Start PostgREST server
```bash
./scripts/postgrest_docker_start.sh postgres://halive_app:<halive_app_password>@localhost:5432/block_log <server_port>
```
Replace `<halive_app_password>` with the password of `halive_app` role.

## Uninstall

Removes all HAlive related schemas, tables and data from the HAF database.
```bash
psql -f src/sql/drop_db.sql block_log
```