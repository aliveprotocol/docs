---
id: limitations
title: Limitations
---

:::caution
These limitations currently apply to v0.x of the protocol. It may change in future versions of Alive Protocol.
:::

## Stream Propagation Performance

The performance of Alive Protocol streams are limited to the capability of the underlying file-sharing protocols, such as IPFS and Skynet. It is important for IPFS/Skynet nodes used to propagate Alive Protocol related files to peer closely with gateways used to access the live streams for the best performance.

## GunDB

Alive Protocol currently uses GunDB for improving scalability and reducing blockchain bloat. These scaling solutions may contain underlying issues which can affect the usability of Alive Protocols.

However, it is possible (but **not recommended**) to bypass AliveDB and stream directly on-chain. This publishes every HLS segment hashes on-chain as they are available (approximately every 10 seconds). To do this with Alive-CLI, specify `--batch_interval 0`.

## Link Rot

Alive Protocol only serves as a way to publish video live streams and a way to retrieve them as HLS playlists. It is up to individual DApps or streamers to ensure that past video streams remain playable by keeping the HLS segments and chunks accessible through the underlying file-sharing protocols. Alive Protocol does not guarantee any availability of past video streams.

## Short-Term Streams Only

Alive Protocol streams are on-chain, hence it is only practically feasible for short-term video streams (less than a few hours).