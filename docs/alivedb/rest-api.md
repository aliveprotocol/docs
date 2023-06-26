---
id: rest-api
title: REST API
description: REST API reference for AliveDB
---

REST API reference for [AliveDB](/docs/alivedb).

## Create user

Example curl:
```bash
curl -s --header "Content-Type: application/json" --data '{"key":"unsafePassword"}' http://localhost:3006/createUser | jq
```

Example response:
```json
{
    "id": "g6xic80hkpi79p9b",
    "pub": "a4DAmyHA23xjuLc3XRcb5JdTrhH1HKJ5cqZhzkHO4kA.gGMwrIavPWOl07XVyQnGpGuNZAe3UbDC4bWvaulbsaA"
}
```

You will need either the ID or public key to login to your newly created account.

## User ID login

Example curl:
```bash
curl -s --header "Content-Type: application/json" --data '{"id":"g6xic80hkpi79p9b","key":"unsafePassword"}' http://localhost:3006/loginUser | jq
```

Example response:
```json
{
    "success": true
}
```

## Public key login

Example curl:
```bash
curl -s --header "Content-Type: application/json" --data '{"pub":"a4DAmyHA23xjuLc3XRcb5JdTrhH1HKJ5cqZhzkHO4kA.gGMwrIavPWOl07XVyQnGpGuNZAe3UbDC4bWvaulbsaA","key":"unsafePassword"}' http://localhost:3006/loginUser | jq
```

Example response:
```json
{
    "success": true
}
```

## Fetch stream participants

Example curl:
```bash
curl -s http://localhost:3006/fetchParticipantsKeys | jq
```

Example response:
```json
{
    "avalon": {},
    "hive": {
        "aliveprotocol": [
            "STM8FXZ5eGEGmQbDLG6vf97Qd76vpwSH9ydFn8wPu37cA68HkGgrX"
        ]
    },
    "blurt": {
        "aliveprotocol": [
            "BLT5CoRk4kfR8Ggs4m2V3RxioQRy5eeBtcYBJCq7zLEczZjkfDXQQ"
        ]
    }
}
```

## Get current user

Example curl:
```bash
curl -s http://localhost:3006/currentUser | jq
```

Example response:
```json
{
    "pub": "a4DAmyHA23xjuLc3XRcb5JdTrhH1HKJ5cqZhzkHO4kA.gGMwrIavPWOl07XVyQnGpGuNZAe3UbDC4bWvaulbsaA",
    "epub": "JWTzFN-8L6iPS-3CTgXhVYLbWfaYWMSVi-ZRiqXEozs.8SYPKKZcg4REu87ElMWPZ3OGNoQCOFju1q9YgCzQgnA",
    "alias": "g6xic80hkpi79p9b",
    "loggedIn": true,
    "requiresAccessToken": true,
    "authId": "alivedb_login"
}
```

## Get access token

:::caution
This method will only work if `require_access_token` is set to `true` (see config guide [here](/docs/alivedb/config#token-auth)).
:::

:::tip
The guide to construct the full payload required may be found [here](/docs/alivedb/sig-auth).
:::

Example curl:
```bash
curl -s --header "Content-Type: text/plain" --data 'aliveprotocol:link1:alivedb_login:hive:76092780:0489156ce51562088e21cf7aee70bbdf6832965d:1f281a0d00755756a76e6e88f3f84a8f65494dc8d1a37a7a1734575743a3a1d0374e5a63002a43a03cb1c67c94d4c8535625b4ec39394304f7291adaac2eab0ce9' http://localhost:3006/getToken | jq
```

Example response:
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxpdmVwcm90b2NvbCIsImxpbmsiOiJsaW5rMSIsImFwcCI6ImFsaXZlZGJfbG9naW4iLCJuZXR3b3JrIjoiaGl2ZSIsImlhdCI6MTY4NzY5MjQyNC42NjUsImV4cCI6MTY4Nzc3ODgyNC42NjV9._84ACpGPUcneXo5B7Fc1rlnDS0ka6gE5lQMmt8FPu6A",
    "error": null
}
```

## Push new stream

:::info
An access token **must** be provided in the `Authorization` header as `Bearer` token if access token authentication is enabled in AliveDB config.
:::

Example curl:
```bash
curl -s --header "Content-Type: application/json" --data '{"network":"hive","streamer":"techcoderx","link":"stream1","stream":{"src":"QmNoa96v5gCfnzsdEbzZtrJvuXH14hS8k8DPPUQbdJMy7i","len":10}}' http://localhost:3006/pushStream | jq
```

Example curl with access token:
```bash
curl -s --header "Content-Type: application/json" --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxpdmVwcm90b2NvbCIsImxpbmsiOiJsaW5rMSIsImFwcCI6ImFsaXZlZGJfbG9naW4iLCJuZXR3b3JrIjoiaGl2ZSIsImlhdCI6MTY4NzY5MjQyNC42NjUsImV4cCI6MTY4Nzc3ODgyNC42NjV9._84ACpGPUcneXo5B7Fc1rlnDS0ka6gE5lQMmt8FPu6A" --data '{"network":"hive","streamer":"techcoderx","link":"stream1","stream":{"src":"QmNoa96v5gCfnzsdEbzZtrJvuXH14hS8k8DPPUQbdJMy7i","len":10}}' http://localhost:3006/pushStream | jq
```

Example response:
```json
{
    "success": true
}
```

## Get stream with public key

Example curl:
```bash
curl -s 'http://localhost:3006/getStream?pub=a4DAmyHA23xjuLc3XRcb5JdTrhH1HKJ5cqZhzkHO4kA.gGMwrIavPWOl07XVyQnGpGuNZAe3UbDC4bWvaulbsaA&network=hive&streamer=techcoderx&link=stream1&ts=189394384393' | jq
```

Example response:
```json
[
    {
        "src": "QmNoa96v5gCfnzsdEbzZtrJvuXH14hS8k8DPPUQbdJMy7i",
        "len": 10
    }
]
```