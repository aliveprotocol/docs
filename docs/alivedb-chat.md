---
id: alivedb-chat
title: AliveDB Chat
description: P2P live chat on AliveDB for Alive Protocol
---

AliveDB encapsulates a sample p2p live chat implementation using GunDB that works on blockchain accounts across multiple networks.

Due to the way GUN middlewares work, live chat participants must request chat access by writing some signature data in GunDB. On the streamer side, AliveDB listens to new requests and adds them to the approved participants list in the database if the signature is valid and the participant is not blacklisted by the moderators in any way. This process is usually done automatically.

## Signatures

Each message in the live chat will be timestamped and signed with their private key of their associated on-chain account. Every viewer listening for new live chat messages will verify the signatures of each message.

If using Keychain browser extensions, signature requests must be approved within 30 seconds of the request creation timestamp.

## Moderation

Streamers will have the full control over chat moderation, such as issuing bans or blacklisting specific chat messages. These actions are performed within the GunDB user namespace, under the same or different AliveDB user account.

## Chat archives

If possible on the specific platform, streamers may obtain a plain-text dump of the live chat containing the details of all chat messages in a live stream. Streamers will verify the signatures for each message before adding the dump to IPFS.

The streamer then publishes the hash of the dump to the on-chain video metadata, which will be used by stream archive viewers to fetch all messages posted during the stream to be shown on frontends.

## Demo

A sample webpage has been included within [AliveDB](https://github.com/aliveprotocol/AliveDB/tree/master/livechatexample) to demonstrate the browser implementation of the live chat.

You can experiment by starting a local [AliveDB peer](/docs/alivedb) and opening the webpage in different browsers.