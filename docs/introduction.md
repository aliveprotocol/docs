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

Welcome to the official documentation for Alive Protocol, an on-chain HLS (HTTP Live Streaming) video streaming protocol.

Alive Protocol uses IPFS (or Skynet) as the backend storage for HLS stream content and GunDB P2P database as an off-chain live caching layer. The on-chain data store lives on Hive, featuring [single block finality](https://peakd.com/hive-139531/@blocktrades/one-block-irreversibility-for-delegated-proof-of-stake-dpos) for 3-second block confirmation times and [Hive Application Framework (HAF)](https://gitlab.syncad.com/hive/haf) that indexes data related to Alive Protocol.

Alive Protocol can be extended to index other blockchains as well when desired.

## Why Alive Protocol?

1. **Network Agnostic**

    Alive Protocol uses decentralized file sharing protocols such as IPFS (extensible to other protocols) and blockchains such as Hive, which enables streamers to select their favourite protocol to push their streams to. They also choose their preferred DApp to broadcast their streams to.

2. **Developer Friendly**

    Alive Protocol uses [HLS](https://developer.apple.com/streaming) to deliver live streams, the video streaming communications protocol that is currently widely used by many websites and video players to deliver video content. All that is required to stream content is to fetch the m3u8 playlist from any Alive Protocol API node.

3. **Censorship resistance**

    Neither the creator of Alive Protocol nor the developers of any P2P protocols used to build Alive Protocol can prevent anyone from streaming content through Alive Protocol. You own the private keys that enables you to publish HLS segments of your stream on-chain. You can even run your own Alive Protocol API node to access the live streams from the network of your choice.

## Roadmap

Everything you need to know about the development of Alive Protocol can be viewed through the project board [here](https://github.com/orgs/aliveprotocol/projects/1).