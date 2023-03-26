---
id: stream-on-hive-cli
title: Stream on Hive (CLI)
---

:::info
Useful for development purposes on testnet/mirrornet and programmatic usage.
:::

You can stream through Alive Protocol using CLI during the testing phrase as the UI for streamers is currently being developed. If you wish to perticipate in the early testing, please contact `techcoderx#7481` on Discord for further information.

## General Procedure

1. Setup a Hive development testnet with `sql_serializer` plugin.
2. Setup HAlive and connect to the HAF database of your local testnet.
3. Setup Alive-CLI and install AliveDB.
4. Setup an IPFS node.
5. Start Alive daemon.
6. Setup OBS to record HLS to `~/.alive/record_here` and start recording.