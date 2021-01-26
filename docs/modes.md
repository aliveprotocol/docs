---
id: modes
title: Stream Modes
---

Alive streams can be broadcasted to the world in a variety of ways. Each of them may provide different advantages and disadvantages, so it is important to choose the right one for your best streaming experience.

### On-Chain Direct

Best for streamers who want **maximum immutability**.

Streams operated this way broadcasts the hashes of every .ts chunks directly to the blockchain without using any form of off-chain caching. This means transacting every 10 seconds as every stream chunks are added to IPFS/Skynet throughout the livestream.

This requires large amount of stake in the network to generate sufficient resources to transact with the blockchain this way. Insufficient resources generated would cause failed transactions that leads to streams being cut off unexpectedly.

**Miminum required stake:**

<p>
Avalon: 11,500 DTUBE

Hive: 3,200 HP
</p>

### Off-Chain Cached

Suitable for **majority** of streamers who streams for less than 24 hours at a time.

Off-chain cached streams still transact with the blockchain but less frequently. The most recent stream hashes are stored in AliveDB off-chain P2P database. Every 5 minutes, Alive daemon pulls all stream hashes that are recently broadcasted to AliveDB and broadcasts them to the blockchain before they expire on AliveDB.

This requires significantly less stake compared to on-chain direct streams due to reduced amount of data being stored on-chain, at the cost of reduced immutability. On Avalon, 64KB bandwidth is sufficient to stream for 2 hours without interruptions.

**Recommended stake:**

<p>
Avalon: 2,300 DTUBE

Hive: 870 HP
</p>

*Realistically, the required stake to generate resources is significantly less than the above for shorter or infrequent streams as resources continue to recharge when not streaming.*

### Off-Chain Only

Best for continous (24/7) streams that do **not** need immutable live streams. This mode is currently unavailable and is being worked on.

Off-chain only streams do not publish any stream .ts hashes to the blockchain, hence the only on-chain transactions made are stream creation, stream metadata updates and finalizing the stream. Unlike stream modes that publishes the stream .ts hashes on-chain, off-chain only streams do not have a playable stream archive after the livestream.

### Disclaimer

All requirements stated above are estimates at time of writing this page with the assumption of only source resolution being streamed as well as having short usernames and permlinks. The stake requirements may change from time to time as Hive RC pools vary daily and Avalon bandwidth recharge rate might be adjusted by leaders in the future.