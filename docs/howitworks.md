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

Live chat happens completely off-chain through AliveDB. Streamers may choose to publish the live chat archive on-chain after the stream ends as an IPFS hash or Skylink of the plain text containing the chat messages.

Due to the way GUN middlewares work, live chat participants must request chat access by writing some signature data in GunDB. On the streamer side, AliveDB listens to new requests and adds them to the approved participants list in the database if the signature is valid and the participant is not blacklisted in any way. This process is usually done automatically.

### Signatures

Each message in the live chat will be timestamped and signed with their private key of their associated on-chain account. Every viewer listening for new live chat messages will verify the signatures of each message.

If using Keychain browser extensions, signature requests must be approved within 30 seconds of the request creation timestamp.

### Moderation

Streamers will have the full control over chat moderation, such as issuing bans or blacklisting specific chat messages. These actions are performed within the GunDB user namespace, under the same or different AliveDB user account.

### Chat archives

If possible on the specific platform, streamers may obtain a plain-text dump of the live chat containing the details of all chat messages in a live stream. Streamers will verify the signatures for each message before adding the dump to IPFS/Skynet.

The streamer then publishes the hash of the dump to the on-chain video metadata, which will be used by stream archive viewers to fetch all messages posted during the stream to be shown on frontends.

### Demo

A sample webpage has been included within [AliveDB](https://github.com/aliveprotocol/AliveDB/tree/master/livechatexample) to demonstrate the browser implementation of the live chat.

You can experiment by starting a local [AliveDB peer](packages/alivedb.md) and opening the webpage in different browsers.