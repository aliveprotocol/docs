---
id: introduction
title: Introduction
description: Introduction to Alive Protocol
keywords: [alive protocol, hls, hive, haf, ipfs]
slug: /
---

:::caution
Alive is currently **pre-alpha**, hence any part of the specifications or the documentation may change significantly.
:::

Welcome to the official documentation for Alive Protocol, an on-chain HLS (HTTP Live Streaming) live streaming protocol.

Alive Protocol uses [IPFS](https://ipfs.io) as the backend storage for HLS stream content and [GunDB](https://gun.eco) P2P database as an off-chain live caching layer. The on-chain data store lives on [Hive](https://hive.io), featuring [single block finality](https://peakd.com/hive-139531/@blocktrades/one-block-irreversibility-for-delegated-proof-of-stake-dpos) for 3-second block confirmation times and [Hive Application Framework (HAF)](https://gitlab.syncad.com/hive/haf) that indexes data related to Alive Protocol.

Alive Protocol can be extended to index other blockchains as well when desired.

## Why Alive Protocol?

1. **Developer Friendly**

    Alive Protocol uses [HLS](https://developer.apple.com/streaming) to deliver live streams, the industry leading streaming protocol used by many video players. All it takes to deliver Alive Protocol streams is just using m3u8 playlists provided by [HAlive](/docs/halive) API nodes.

2. **Censorship Resistance**

    Neither the creators nor developers of Alive Protocol or its dependencies can prevent anyone from streaming through Alive Protocol. You own the private keys that enables you to publish HLS segments of your stream on-chain.

3. **Live Immutability**

    HLS segments are continously pushed on-chain during the live stream. Once a segment is included in a finalized block, it is considered as immutable. This may be useful for important live events that you may want to ensure that it cannot be tampered or removed at the very moment the event is recorded live.

4. **Instant Stream Archive Availability**

    Stream archives of ended on-chain Alive Protocol streams are made available instantly so that you can watch it immediately. No waiting for additional encoding to take place.

5. **Horizontally Scalable**

    Alive Protocol streams are accessible through multiple IPFS gateways as well as multiple HAlive API nodes run by different operators. If an endpoint or gateway doesn't work well, you may switch to another one or run your own nodes.

## Roadmap

Everything you need to know about the development of Alive Protocol can be viewed through the project board [here](https://github.com/orgs/aliveprotocol/projects/1).