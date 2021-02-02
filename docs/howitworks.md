---
id: howitworks
title: How It Works
---

## Video Streams

A typical Alive stream lifecycle works as follows:

1. The streamer creates the post that links to the Alive stream on the blockchain of their choice.
2. The streamer creates the Alive stream either by publishing their AliveDB public key (for streams involving AliveDB) or their first stream chunk to the blockchain (for on-chain direct streams).
3. Alive daemon periodically scans for new 10-second .ts chunks recorded by the streamer, adds that chunk to IPFS/Skynet and publishes the hash.
4. After the livestream, streamer broadcasts a transaction to indicate that the stream is complete.

### Accessing streams

The streams are then indexed by API nodes so that it can be put together and served as an [m3u8 playlist](https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming). This is done by all API nodes on Avalon and HAlive endpoints for Alive streams on Hive.

In addition to the .ts hashes published on-chain, API nodes also looks for .ts hashes cached on AliveDB (if any) using the published AliveDB public key.

## Live chat

:::caution

The specifications for live chat on Alive is in **draft** and not final.

:::

Live chat happens completely off-chain through AliveDB. Streamers may choose to publish the live chat archive on-chain after the stream ends as an IPFS hash or Skylink of the plain text containing the chat messages.