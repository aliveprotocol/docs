---
id: sig-auth
title: Signature Auth
description: Generate signatures for token authentication
---

This document describes the construction of the signed message used for authentication for `/getToken` method.

## Complete Payload Example

```
aliveprotocol:link1:alivedb_login:hive:76092780:0489156ce51562088e21cf7aee70bbdf6832965d:1f281a0d00755756a76e6e88f3f84a8f65494dc8d1a37a7a1734575743a3a1d0374e5a63002a43a03cb1c67c94d4c8535625b4ec39394304f7291adaac2eab0ce9
```

## Construction

The payload consists of 7 parts separated by colons (`:`).

### Section 1: Username

The username to be authenticated. In the example above, it is `aliveprotocol`.

### Section 3: Auth Identifier

The unique identifier for each instance, this is to ensure the same access token will not work on different upload endpoints. This may be obtained from `auth_identifier`, which can also be obtained from [`/currentUser`](/docs/alivedb/rest-api#get-current-user) GET API call.

In the example above, it is `alivedb_login`.

### Section 4: Network

The network to be authenticated.

In the example above, it is `hive`.

### Section 5: Recent Block Number

The most recent block number of the blockchain network. Only blocks as recent as `auth_timeout_blocks` old are accepted. In the example above, it is [76092780](https://hivehub.dev/b/76092780).

### Section 6: Block ID/Hash of the Recent Block Number

The block ID or hash of the block number in the previous section. In the example above, the block ID of the said block was `0489156ce51562088e21cf7aee70bbdf6832965d`.

### Section 7: Signature

The graphene formatted signature of all of the above sections, as a string.

The message to sign for the example above is:
```
aliveprotocol:link1:alivedb_login:hive:76092780:0489156ce51562088e21cf7aee70bbdf6832965d
```

The resulting signature would be `1f281a0d00755756a76e6e88f3f84a8f65494dc8d1a37a7a1734575743a3a1d0374e5a63002a43a03cb1c67c94d4c8535625b4ec39394304f7291adaac2eab0ce9` created using the private posting key (with public key `TST62HMqabMDZ1BPB1hvLcon758gM2KNFkT3ZuVbtHJ62WcHmem7R`) of the account `aliveprotocol`.

Join the strings from the above parts in the correct order to obtain the payload needed to call `/getToken`.