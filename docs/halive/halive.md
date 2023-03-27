---
id: halive
title: HAlive
---

HAF-based Alive Protocol streams indexer and API server. Indexes Hive from a starting block number for Alive-related `custom_json` operations using the HAF app sync algorithm.

## Required Dependencies

* `nodejs` and `npm` (Latest LTS, v18 minimum supported)
* Synced [HAF](https://gitlab.syncad.com/hive/haf) node

A locally-running IPFS daemon is recommended for faster chunk fetching.

## Setup

### PostgreSQL Roles
```sql
CREATE ROLE halive_app WITH LOGIN PASSWORD 'halivepass' CREATEROLE INHERIT IN ROLE hive_applications_group;
CREATE ROLE halive_user WITH LOGIN INHERIT IN ROLE hive_applications_group;
GRANT CREATE ON DATABASE block_log_testnet TO halive_app;
GRANT halive_user TO halive_app;
```

### PostgREST Installation
```bash
./scripts/postgrest_install.sh
```

### PostgREST API methods
```bash
psql -f src/sql/create_apis.sql block_log
```

## Sync
```bash
npm start
```

## Start PostgREST server
```bash
./scripts/postgrest_start.sh postgres://halive_app:<halive_app_password>@localhost:5432/block_log <server_port>
```
Replace `<halive_app_password>` with the password of `halive_app` role.

## Start Express server
```bash
npm run server
```
Listens to `http://127.0.0.1:3010` unless specified otherwise in [config](/docs/halive/config).

## Uninstall

Removes all HAlive related schemas, tables and data from the HAF database.
```bash
psql -f src/sql/drop_db.sql block_log
```