---
id: cli-guide
title: CLI Usage
description: Usage guide for Alive-CLI tool
---


## Install AliveDB
Helper script to install AliveDB into the data directory. Alternatively, you may connect to an external AliveDB process using `--alivedb_endpoint`.
```
alivedb_install
```

The default data directory is `~/.alive` where all Alive working files will be stored.

## Starting a new stream

Begin from step 3 if streaming directly on-chain.

1. If not already, create an AliveDB user account.
```bash
alivedb_usercreate <new_alivedb_password>
```
:::note
If using AliveDB external process, create the user by calling the [/createUser API](/docs/alivedb/rest-api#create-user).
:::

2. Publish your AliveDB public key to your new stream.
```bash
alive_configure hive <hive_api_node> <link> <alivedb_pubkey> <username> <posting_key>
```

3. Setup OBS recording output settings according to the config listed [here](/docs/alivecli/#obs-recording-output-config).

4. Start the Alive daemon. To get CLI usage info:
```bash
alivecli --help
```

5. Start recording in OBS.

## Ending a stream

1. Stop recording in OBS.
2. Let the final segment to complete processing, then hit `Ctrl+C` on Alive daemon.
3. Let the world know that the stream has ended so that the stream archive will be seekable.

```bash
alive_end hive <hive_api_node> <link> <username> <posting_key>
```