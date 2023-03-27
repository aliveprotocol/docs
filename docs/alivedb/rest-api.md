---
id: rest-api
title: REST API
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
    "loggedIn": true
}
```

## Push new stream

Example curl:
```bash
curl -s --header "Content-Type: application/json" --data '{"network":"hive","streamer":"techcoderx","link":"stream1","stream":{"src":"QmNoa96v5gCfnzsdEbzZtrJvuXH14hS8k8DPPUQbdJMy7i","len":10}}' http://localhost:3006/pushStream | jq
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