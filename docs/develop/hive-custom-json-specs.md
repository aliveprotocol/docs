---
id: hive-custom-json-specs
title: Hive Custom JSON Specs
description: Custom JSON specification for Alive Protocol transactions on Hive
---

This page lists the custom JSON specifications for Alive Protocol on-chain transactions on Hive.

## Custom JSON Fields

### ID

Identifying string for all transactions related to Alive Protocol by network type. This is the very first thing HAlive looks for when indexing Alive Protocol transactions.

* Mainnet: *TBD*
* Devnet: `alive-test`

### Required Posting Auths

All Alive Protocol transactions (unless stated otherwise) **must** be signed with the posting key. This field is used to identify the transacting streamer.

Up to **one (1)** username is allowed in the `required_posting_auths` array. Transactions containing more than one username in this array will be ignored by HAlive.

## Custom JSON Specs

:::info
Each livestream is identified by the streamer and its permlink. The livestream permlink is unique for each streamer, meaning the same streamer may not reuse the same link for a different livestream. However, the same link can be used once for different streamers. Not to be confused with post permlink, although it may be a good practise to use the same permlink relating to the post.
:::

:::info
All fields are **required** unless specified otherwise.
:::

### Push Stream

Pushes a new stream chunk or segment to the HLS playlist.

#### Fields:
* `op`: Operation ID. The ID for `PUSH_STREAM` is 0.
* `seq`: Sequence number of the stream chunk or segment pushed on-chain. Increment for every new chunk or segment pushed starting from 0 for each stream link.
* `link`: The permlink identifying the livestream to push new chunk/segment to.
* `src`: The IPFS hash of the stream chunk or segment at source quality.
* `len` *(only for .ts segments)*: Length of the stream segment (.ts) in seconds.

#### Example operation (batched chunk):
```json
{
    "id": "alive-test",
    "required_auths": [],
    "required_posting_auths": ["aliveprotocol"],
    "json": {
        "op": 0,
        "seq": 0,
        "link": "stream1",
        "src": "QmRry1GZFf7tGaovPzyuZ64hu6TwpA4KCMgmVRi8TAqFyZ"
    }
}
```

#### Example operation (single segment):
```json
{
    "id": "alive-test",
    "required_auths": [],
    "required_posting_auths": ["aliveprotocol"],
    "json": {
        "op": 0,
        "seq": 1,
        "link": "stream1",
        "src": "QmdvFpbcSNGJ7mBEhu1RKNvieUtfFsdMyMUDKeCyA9QyA1",
        "len": 10.033
    }
}
```

### End Stream

Mark a livestream as ended. Once a livestream is ended, the HLS playlist will be served as VOD (video-on-demand) and no further stream chunks or segments may be pushed on-chain.

#### Fields:
* `op`: Operation ID. The ID for `END_STREAM` is 1.
* `link`: The permlink identifying the livestream to end.

#### Example operation:
```json
{
    "id": "alive-test",
    "required_auths": [],
    "required_posting_auths": ["aliveprotocol"],
    "json": {
        "op": 1,
        "link": "stream1"
    }
}
```

### Configure Stream

Configure a livestream. This operation is used to first create the livestream on-chain.

#### Fields:
* `op`: Operation ID. The ID for `CONFIGURE_STREAM` is 2.
* `link`: The permlink identifying the livestream to configure.
* `pub` *(required for AliveDB)*: AliveDB public key used for pushing stream chunks/segments.
* `gw` *(optional)*: Preferred default IPFS gateway to fetch the livestream. Not all frontends/players may respect this value.

#### Example operation:
```json
{
    "id": "alive-test",
    "required_auths": [],
    "required_posting_auths": ["aliveprotocol"],
    "json": {
        "op": 2,
        "link": "stream1",
        "pub": "T-s_X6Mg0LQvAAZC0f9yCryeSFs55OAntgyIH5CN9oY.98-Q_o5AFiUjbbaml6WEDp5tcZb3S56LpfYk78Yzb_s",
        "gw": "https://ipfs.io"
    }
}
```