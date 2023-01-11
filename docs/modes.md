---
id: modes
title: Stream Modes
---

Alive Protocol streams can be broadcasted to the world in a variety of ways. Each of them may provide different advantages and disadvantages, so it is important to choose the right one for your best streaming experience.

### On-chain (with off-chain cache)

Suitable for **majority** of streamers who streams short events (less than 24 hours).

Off-chain cached streams still transact with the blockchain but less frequently. The most recent stream hashes are stored in AliveDB off-chain P2P database. Every 5 minutes, Alive daemon pulls all stream hashes that are recently broadcasted to AliveDB before they expire and puts them together in a single hash list file that also gets added to IPFS/Skynet. The resulting file hash is then broadcasted to the blockchain.

This method minimizes the amount of data being broadcasted on-chain hence minimizes bandwidth or resource credits requirements.

The stream archive will be made available immediately after the streamer has indicated that the stream has ended.

### Off-Chain Only

Best for continous (24/7) streams that do **not** need immutable live streams. This mode is currently unavailable and is being worked on.

Off-chain only streams do not publish any stream .ts hashes to the blockchain, hence the only on-chain transactions made are stream creation, stream metadata updates and finalizing the stream. Unlike stream modes that publishes the stream .ts hashes on-chain, off-chain only streams do not have a playable stream archive after the livestream.