---
id: introduction
title: Introduction
slug: /
---

:::caution

Alive is currently **pre-alpha**, hence any part of the specifications or the documentation may change significantly.

:::

Welcome to the official documentation for Alive Protocol, a multi-chain decentralized live streaming protocol using HLS (HTTP Live Streaming), the video streaming communications protocol that is currently widely used by many websites to deliver video content.

Alive uses IPFS and/or Skynet as backend storage for HLS stream content and GunDB P2P database as an off-chain streams caching layer and live chat. It is currently interoperable with Hive and Avalon networks as an immutable store for live video streams (and optionally live chat archive). It has been designed such that it can be integrated by any video DApp that wishes to incorporate decentralized live streams with ease.

## Why Alive Protocol?

1. **Choices**

    Alive Protocol uses two leading decentralized file sharing protocols which are IPFS and Skynet, which enables streamers to select their favourite protocol to push their streams to. They also choose their preferred network and DApp to broadcast their streams to.

2. **Horizontally Scalable**

    Alive Protocol is built on multiple blockchain networks, hence the scalability and uptime of Alive Protocol is not limited to a single blockchain. Your streams are also spread out across multiple IPFS and Sia (Skynet) nodes to ensure the best live playback performance possible.

3. **Censorship resistance**

    Neither the creator of Alive Protocol nor the developers of any P2P protocols used to build Alive Protocol can prevent anyone from streaming content through Alive Protocol. You own the private keys that enables you to publish .ts hashes of your stream. Your streams are viewable through any Alive Protocol enabled API node which can be run by anyone (including yourself).

## Roadmap

Everything you need to know about the development of Alive Protocol can be viewed through the project board [here](https://github.com/orgs/aliveprotocol/projects/1).