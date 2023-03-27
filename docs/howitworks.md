---
id: howitworks
title: How It Works
---

## Creating Video Streams

A typical Alive Protocol stream lifecycle works as follows:

1. The streamer creates the post that links to the Alive Protocol stream on Hive.
2. The streamer configures the Alive Protocol stream by publishing their AliveDB public key to Hive.
3. The streamer begins recording the stream using the HLS format into a specifed folder.
4. Alive daemon periodically scans for new 10-second .ts segments recorded by the streamer in the previous step, adds that .ts segment file to IPFS and publishes the hash to AliveDB.
5. Every 1 to 5 minutes, the newly-published segment hashes are bundled into a CSV file called a chunk, which is then added to IPFS. The hash of that file gets broadcasted into the blockchain.
6. After the livestream, the streamer stops the recording. The daemon then bundles the remaining segment hashes and publishes them like in the previous step.
7. The streamer broadcasts a transaction to the blockchain to indicate that the stream is complete.
8. The stream archive will be made available immediately after marking the stream as complete.

## Accessing Video Streams

The streams are then indexed by API nodes so that it can be put together and served as an [m3u8 playlist](https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming). This is done by HAlive endpoints for Alive Protocol streams on Hive.

In addition to the segments published on-chain, API nodes also looks for .ts hashes on AliveDB (if any) using the published AliveDB public key.

## Live chat

Live chat happens completely off-chain. The DApp (or interface) may choose to use the live chat communication within AliveDB or another solution on their own that is completely separate from Alive Protocol.

Depending on the DApp, streamers may choose to publish the live chat archive on-chain after the stream ends as an IPFS hash or Skylink of the plain text containing the chat messages.