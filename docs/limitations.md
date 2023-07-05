---
id: limitations
title: Limitations
description: Alive Protocol limitations
---

:::caution
These limitations currently apply to v0.x of the protocol. It may change in future versions of Alive Protocol.
:::

## Stream Propagation Performance

The performance of Alive Protocol streams are limited to the capability of the underlying file-sharing protocols such as IPFS. It is important for IPFS nodes used to propagate Alive Protocol related files to peer closely with gateways used to access the live streams for the best performance.

## GunDB

Alive Protocol currently uses GunDB for improving scalability and reducing blockchain bloat. These scaling solutions may contain underlying issues which can affect the usability of Alive Protocol.

However, it is possible (but **not recommended**) to bypass AliveDB and stream directly on-chain. This publishes every HLS segment hashes on-chain as they are available (approximately every 10 seconds). To do this with Alive-CLI, specify `--batch_interval 0`.

In the future, it may be possible to stream exclusively to scaling solutions such as [Vaultec Smart Chain (VSC)](https://vsc.eco), eliminating the need to push streams initially to GunDB then to broadcast stream chunks to Hive L1.

## Link Rot

Alive Protocol only serves as a way to publish video live streams and a way to retrieve them as HLS playlists. It is up to individual DApps or streamers to ensure that past video streams remain playable by keeping the HLS segments and chunks accessible through the underlying file-sharing protocols. Alive Protocol does not guarantee any availability of past video streams.

## Short-Term Streams Only

Alive Protocol streams are on-chain, hence it is only practically feasible for short-term video streams (less than a few hours).

## Not A Platform

Alive Protocol itself only outlines the structure of on-chain video streams stored on decentralized file-sharing protocols such as IPFS, along with implementations of creating, indexing and viewing livestreams associated with the protocol.

It does not provide a standalone feature complete platform that can replace centralized live streaming platforms. It is targeted towards existing video DApps on the relevant networks that may be currently relying on centralized infrastructure for live streaming to integrate with the protocol.

However, Alive Protocol may be used standalone to stream on-chain which is then linked to websites operated by the streamer or Hive posts. This approach may be useful for avoiding any fees that the video DApp may impose on rewards.

## Monetization

Adding to the above, Alive Protocol does not handle monetization of live streams in any manner. It is something for video DApps integrating the protocol (or streamers themselves) to consider.