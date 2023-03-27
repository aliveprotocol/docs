---
id: rest-api
title: REST API
---

REST API reference for [HAlive](/docs/halive). APIs are available in both **PostgREST** and **Express** APIs unless specified otherwise.

:::note
PostgREST GET APIs contain a `/rpc` prefix. For example, if the Express API method is `/get_stream_info`, the equivalent PostgREST API method would be `/rpc/get_stream_info`.
:::

## Get State

Example curl:
```bash
curl -s -H 'Content-Type: application/json' http://localhost:3010
```

Example response:
```json
{
    "db_version": 1,
    "last_processed_block": 6108
}
```

## Get Stream Info

Example curl:
```bash
curl -s -H 'Content-Type: application/json' http://localhost:3010/get_stream_info?stream_author=aliveprotocol&stream_link=stream3
```

Example response:
```json
{
    "id": 4,
    "link": "stream3",
    "ended": false,
    "st_id": 3,
    "l2_pub": "T-s_X6Mg0LQvAAZC0f9yCryeSFs55OAntgyIH5CN9oY.98-Q_o5AFiUjbbaml6WEDp5tcZb3S56LpfYk78Yzb_s",
    "created": "2023-03-25T05:44:27",
    "streamer": "aliveprotocol",
    "chunk_head": 7,
    "storage_gw": null,
    "l2_protocol": "gundb",
    "last_updated": "2023-03-25T05:44:27",
    "last_streamed": "2023-03-25T06:36:42",
    "first_streamed": "2023-03-25T05:48:57",
    "chunk_finalized": 7,
    "storage_protocol": "ipfs"
}
```

## Get On-Chain Stream Chunks

Example curl:
```bash
curl -s -H 'Content-Type: application/json' http://localhost:3010/get_stream_chunks?stream_author=aliveprotocol&stream_link=stream3
```

Example response:
```json
{
    "id": 4,
    "chunks": [
        {
            "len": null,
            "seq": 0,
            "src_hash": "QmRry1GZFf7tGaovPzyuZ64hu6TwpA4KCMgmVRi8TAqFyZ"
        },
        {
            "len": 10.033,
            "seq": 1,
            "src_hash": "QmdvFpbcSNGJ7mBEhu1RKNvieUtfFsdMyMUDKeCyA9QyA1"
        },
        {
            "len": null,
            "seq": 2,
            "src_hash": "QmUhAjp4sWG92mK8Rm9CRMf3XLQcJFVVouGX5TSgUg6XpZ"
        },
        {
            "len": null,
            "seq": 3,
            "src_hash": "QmRrjbK5y9DLRx44CwvfrVW4yy6LA5vcAzu8aph8VGjvRb"
        },
        {
            "len": null,
            "seq": 4,
            "src_hash": "QmWs1MY6pBFdeyuBM1WQw99jbwDLQ8q9QYn63g1r1juuH1"
        },
        {
            "len": null,
            "seq": 5,
            "src_hash": "QmRCWVJTPbH2dEnHmT93j5e2Z3bEt2mzmvBs77oJmtHfab"
        },
        {
            "len": null,
            "seq": 6,
            "src_hash": "QmVTNMC7fbtBvqT9QPWLRsJ4PpUDFLXjALTcv9WLYi7bbb"
        },
        {
            "len": null,
            "seq": 7,
            "src_hash": "QmV64YXmkWnd81FGK9XBadwSnSQRHYjne56y5U9fLknqFJ"
        }
    ]
}
```

## Fetch m3u8 Playlist

:::info
This URL will be used for HLS video players to access the live streams.
:::
:::note
This API method is only available in the Express API.
:::

Format:
```
http://localhost:3010/stream/:author/:link?gw=GATEWAY
```

Example curl:
```bash
curl -s http://localhost:3010/stream/aliveprotocol/stream3?gw=http://[::]:8080
```

Example response:
```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:EVENT

#EXTINF:10.033000,
http://[::]:8080/ipfs/QmdvFpbcSNGJ7mBEhu1RKNvieUtfFsdMyMUDKeCyA9QyA1
#EXTINF:13.133,
http://[::]:8080/ipfs/QmUPqgXNMfA2i8bST27Xsw9R2QZjGYR1xSyKP8tzjPXn5M
#EXTINF:10.0,
http://[::]:8080/ipfs/QmVsz2P6M382zX6Y1fKN5m5U81eRGY7SUPsfZ35rwWnpNR
#EXTINF:5.333,
http://[::]:8080/ipfs/QmUkwayxZ6k3mUY5R6d2kUZ9i7hGPH2aoNaMAR2NiTxLex
#EXTINF:10.267,
http://[::]:8080/ipfs/QmSXN3nHX3QzgHF1Me6qXDVAPvGPMyzEpgv9VosYeudsNE
#EXTINF:10.167,
http://[::]:8080/ipfs/QmaTRKuYTVUXxDUsHk62qfMxu9QvDXJZigYGLdKMWzbxDD
#EXTINF:12.133,
http://[::]:8080/ipfs/QmP2PpUvfZpzCe9zzTfnt8eRtfLasFqonKe2XMjNHtJoPP
#EXTINF:10.367,
http://[::]:8080/ipfs/QmbisNFEBMSo7ni3bpJcYvX7WejKLuzan9Y4XqnpBiYhtR
#EXTINF:12.433,
http://[::]:8080/ipfs/QmYoruuXNB5L27Qadfx2BC9woDSNWCyEDJm16xFtPTjScR
#EXTINF:8.567,
http://[::]:8080/ipfs/Qmdivy5NTapBSaeEhuPrGVYNBMBcoXBn8wwzyFX2PgjfvA
#EXTINF:7.267,
http://[::]:8080/ipfs/QmV6H4dXjZdh2RVRD7r762qzMJ7sZJ6cEnUNZcVE5Ft7dy
#EXTINF:17.267,
http://[::]:8080/ipfs/QmRTPkavFSufsLj1GM9kWLsdZjyqHYNAZKdyuuzGfJ2rSx
#EXTINF:6.5,
http://[::]:8080/ipfs/QmUiFR19WLFqh5Cky6aPGVa87n9QsQrDCvn4yJKuyhEFvt
#EXTINF:10.067,
http://[::]:8080/ipfs/QmcPoF1qURpEzVsSSpj3e95vcsm6mxxp5qCJP8m2NjJjvC
#EXTINF:8.433,
http://[::]:8080/ipfs/QmanENLzpPvUDHUHiURfV6VQCvdtWQMhVeQmMnVaNsGeDo
#EXTINF:10.067,
http://[::]:8080/ipfs/QmWyzhwNG5pu7kLXVS4ynD7hrUuME8Txtt6S6Rrh8Y4kbE
#EXTINF:10.067,
http://[::]:8080/ipfs/QmVmXCUjpdNZKBeFGsqsmMyBWXTcKzmNkBiq75eAwAi443
#EXTINF:10.067,
http://[::]:8080/ipfs/QmeL4qXL9Z6VBcxbf4Ahi33rcbQ6BLpZ3wuUQhEQxZHoee
#EXTINF:7.933,
http://[::]:8080/ipfs/QmRxKS3CNyqhECHUqMAjDDqybH6wmZs7nQFFffgPtyeM71
#EXTINF:10.067,
http://[::]:8080/ipfs/QmbjFzcz9dsD747xAcEXqGmkgLBvcav3ZG1caQ8quKwkHB
#EXTINF:10.033,
http://[::]:8080/ipfs/QmWqLrDSbWkcxnncJd5C7jL7EyWJGA3PG8QixhF3htfSw3
#EXTINF:16.733,
http://[::]:8080/ipfs/QmaNNheALuuUE1w7yQjJJvcjnuX76uNTdMFe6BLsEMv2VU
#EXTINF:8.067,
http://[::]:8080/ipfs/QmZYBzSSQKAwe32qpzufGJPb9dyfwUWvZJZoAZNDDSgDaq
#EXTINF:10.067,
http://[::]:8080/ipfs/QmaUw1tBF2fd3GKa5F4h92XHSG3EMc3FS8Uw7SbTp4x5tz
#EXTINF:10.067,
http://[::]:8080/ipfs/QmZs3KbddVSWcRLAB3ThVaodfEMEvN5etdVcYgcLjYz9rP
#EXTINF:5.733,
http://[::]:8080/ipfs/QmU8mzBXo6wMs3mfrQBX7Si6Qt7JpTNw35F39u3P7obX2z
#EXTINF:9.733,
http://[::]:8080/ipfs/QmTTH7ZGq6oJU7tWGNE9caT5YQdcuAGZjZYve94tTgfmoo
#EXTINF:9.767,
http://[::]:8080/ipfs/QmZM1u6KYGUsWgcUhT57YKo99SEbXiX2bDc89Ho9XYK12k
#EXTINF:14.7,
http://[::]:8080/ipfs/QmYD4zeYAjBUyyFnxzKjvq2gq7XxfarVGVveF9qjFSGmmA
#EXTINF:5.7,
http://[::]:8080/ipfs/QmTXgSoTbZgZh2ru9yKnqSHxWYLu1KHxahYHV5ommKB2Dv
#EXTINF:10.233,
http://[::]:8080/ipfs/QmUCjW6jtcFF2UfBVY8qPovYqChvo8BBcRoXR1NuEnpTsX
#EXTINF:11.433,
http://[::]:8080/ipfs/QmaHTJKWDSqT1Cva9UTT5C7N9hSzaApvsdfjrGX87TYXWL
#EXTINF:9.567,
http://[::]:8080/ipfs/QmRpCjUXHjrWXjp4bMXf6LN1H9GNyKy8iVNECdZC9epEZH
#EXTINF:2.667,
http://[::]:8080/ipfs/QmXW6EqwU2zAx8s1npE8aBFTei1yixgSYAa6rjuWyotKEU
#EXT-X-ENDLIST
```