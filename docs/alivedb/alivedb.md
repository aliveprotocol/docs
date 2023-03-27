---
id: alivedb
title: AliveDB
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

### Compile as self-contained executable
```
npm run build
```