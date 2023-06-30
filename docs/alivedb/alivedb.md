---
id: alivedb
title: AliveDB
description: Off-chain GunDB database for Alive streams and live chat messages.
---

Off-chain GunDB database for Alive streams and live chat messages.

## Overview

This package provides the core implementation of the database schematics of AliveDB within GunDB along with the APIs to interact with it. It is used in [Alive-CLI](/docs/alivecli) to perform authenticated tasks such as publishing .ts segment hashes to off-chain cache. It also acts as a standalone AliveDB GUN relay peer.

Most applications should only use a reduced implementation of [alivedb.js](https://github.com/aliveprotocol/AliveDB/blob/master/src/alivedb.js).

## Dependencies

NodeJS and npm are needed which can be installed [here](https://nodejs.org/en/download).

## Installation

### Standalone installation
```
git clone https://github.com/aliveprotocol/AliveDB
cd AliveDB
npm i
```

### Using as submodule
```
git submodule add https://github.com/aliveprotocol/AliveDB [submodule_dir]
```

### Starting AliveDB server
```
npm start
```

## Running in Docker

### Build image
```bash
docker build -t alivedb .
```
Then configure AliveDB using the `.env` file [here](/docs/alivedb/config).

:::caution
Do **not** set the `ALIVEDB_DATA_DIR` variable as this is handled by docker. Set the data directory on the host system in the bind mount through `docker run` below.
:::

### Run container
```bash
docker run --rm -d -v /path/to/data/dir:/app/data --network host --env-file .env --name alivedb alivedb
```

:::note
Replace `/path/to/data/dir` with the data directory on the host system.
:::