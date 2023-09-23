---
id: alivecli
title: Alive-CLI
description: Core Alive daemon and CLI tool for publishing HLS streams to decentralized networks.
---

Core Alive daemon and CLI tool for publishing HLS streams to decentralized networks.

This is the main daemon that is used by streamers to upload .ts segments of a local HLS stream to IPFS and publishes its hash and duration to decentralized networks.

## Pre-requisites

Python 3.8+ with `pip3` package manager are required. [AliveDB dependencies](/docs/alivedb/#dependencies) (and ideally [Git](https://git-scm.com/downloads)) are required to install and run AliveDB within the daemon.

## Dependency Installation

:::note
Applicable for standalone installation outside Docker.
:::

The following packages are required for its dependency packages to be installed successfully:

### Debian/Ubuntu
```bash
sudo apt-get install build-essential libssl-dev python3-dev python3-pip python3-setuptools
```

### Fedora/CentOS
```bash
sudo yum install gcc openssl-devel python-devel
```

### macOS
```bash
brew install openssl
export CFLAGS="-I$(brew --prefix openssl)/include $CFLAGS"
export LDFLAGS="-L$(brew --prefix openssl)/lib $LDFLAGS"
```

### Termux on Android
```bash
pkg install clang openssl python
```

You may also want to install IPFS node for uploading .ts segments to your local repo:
* [go-ipfs](https://dist.ipfs.io/#go-ipfs)
* [ipfs-desktop](https://github.com/ipfs-shipyard/ipfs-desktop/releases)

## Installation

### Clone repository
```bash
git clone https://github.com/aliveprotocol/Alive-CLI
cd Alive-CLI
```

### Setup virtual environment

To create the virtual environment (one-time):
```bash
python3 -m venv .venv --prompt alivecli
```

To enter the virtual environment:
```bash
source .venv/bin/activate
```

### Install in virtual environment
```bash
pip3 install . --use-pep517
```

For CLI usage details, read the CLI usage guide [here](/docs/alivecli/cli-guide).

## Running in Docker

### Build image
```bash
docker build -t alivecli .
```

### Configure .env file

Copy the provided `.env.example` file to `.env` and configure the daemon.

|Env Var|Description|
|-|-|
|`ALIVEDB_ENDPOINT`|AliveDB external endpoint|
|`ALIVE_UPLOAD_ENDPOINT`|IPFS API for uploading stream chunks and segments|
|`ALIVE_BLOCKCHAIN_API`|Hive API node|
|`ALIVE_HALIVE_API`|HAlive API node|
|`ALIVE_STREAMER_USERNAME`|Streamer username|
|`ALIVE_STREAMER_KEY`|Streamer private posting key|
|`ALIVE_STREAM_LINK`|Stream link|
|`ALIVE_BATCH_INTERVAL`|On-chain batch publish interval (in seconds)|

### Run container
```bash
docker run -d --rm -v /path/to/record/folder:/app/record -v /path/to/data/dir:/app/data --network host --env-file .env --name alivecli alivecli
```

## OBS Recording Output Config

:::important
Your recording output configuration must match the settings below. Failing to do so may result in failed uploads or excessive use of bandwidth or resource credits.
:::

- Output mode: **Advanced**
- Type: **Custom output (FFmpeg)**
- FFmpeg output type: **Output to File**
- File path: `~/.alivedb/record_here`
- Container format: **hls**
- Muxer settings: **hls_time=10**
- Keyframe interval: Set this to 10x your framerate. For example, if you're recording at 30fps, set this value to 300.

## Programmatic Usage

The Alive daemon can be invoked programmatically in Python as well. For a detailed guide (including example code snippets), check out the [Streamer SDK](/docs/develop/streamer-sdk) developer documentation.