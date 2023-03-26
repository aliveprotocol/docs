---
id: hive-testnet-setup
title: Hive Testnet Setup
---

Setup a private HAF-enabled Hive development testnet to test Alive Protocol without creating additional blockchain bloat on the mainnet. Most of this guide should be very similar to the [mainnet HAF node setup guide](https://peakd.com/haf/@techcoderx/techcoderxcom-node-is-haf-ready-and-how-you-can-run-one-too) but with testnet-related build flags.

## Node Requirements

:::info
The system requirements of running a HAF-enabled Hive testnet is very minimal as there is no data to begin with. Significantly more resources are required to compile the binaries for use in the testnet.
:::

* Dual-core CPU
* 1GB RAM
* 15GB SSD
* 100Mbps bandwidth for Alive Protocol video streams

### For compilation

:::info
These are the minimum recommended specs to compile `hived`. You may be able to compile with lower specifications but it may take significantly longer time to complete.
:::

* 8-core CPU (AMD Zen 1 or 9th gen Intel Core or better)
* 32GB RAM
* 20GB SSD free space

## Setup Dependencies

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y \
    autoconf \
    automake \
    cmake \
    g++ \
    git \
    zlib1g-dev \
    libbz2-dev \
    libsnappy-dev \
    libssl-dev \
    libtool \
    ninja-build \
    pkg-config \
    doxygen \
    libncurses5-dev \
    libreadline-dev \
    perl \
    python3 \
    python3-jinja2 \
    libboost-all-dev \
    libpqxx-dev \
    postgresql \
    postgresql-server-dev-14
```

## Compile hived

```bash
git clone https://gitlab.syncad.com/hive/haf
cd haf
git submodule update --init --recursive
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_HIVE_TESTNET=ON -GNinja ..
ninja
sudo ninja install
```

## Setup HAF db

Enter the `psql` shell as `postgres` user:
```bash
sudo -i -u postgres psql
```

Create the db with permissions and extensions:
```sql
# Roles
CREATE ROLE hived_group WITH NOLOGIN;
CREATE ROLE hive_applications_group WITH NOLOGIN;
CREATE ROLE hived LOGIN PASSWORD 'hivedpass' INHERIT IN ROLE hived_group;

# Set password if needed
ALTER ROLE role_name WITH PASSWORD 'rolepass';

# Database used by hived
CREATE DATABASE block_log_testnet;

# Use database
\c block_log_testnet

# sql_serializer plugin on db
CREATE EXTENSION hive_fork_manager CASCADE;
```

### Authentication

By default, Postgresql allows only for peer authentication. You may enable password authentication by appending the following line in `/etc/postgresql/14/main/pg_hba.conf`:

```
local all all peer # after this line
local all all md5 # add this
```

For more details, refer to the documentation [here](https://www.postgresql.org/docs/14/auth-methods.html).

## Configure hived

Generate a hived config file if not already:
```bash
hived --dump-config
```

Then edit the config.ini file in the data directory as follows (find the key and modify its value, add them if it is not there):

### Plugins
```ini
# Basic
plugin = witness webserver p2p json_rpc database_api network_broadcast_api condenser_api block_api rc_api

# Get accounts/witness
plugin = account_by_key account_by_key_api

# Transaction status
plugin = transaction_status transaction_status_api

# SQL serializer
plugin = sql_serializer
```

### SQL serializer
```ini
psql-url = dbname=block_log_testnet user=hived password=hivedpass hostaddr=127.0.0.1 port=5432
psql-index-threshold = 1000000
psql-operations-threads-number = 5
psql-transactions-threads-number = 2
psql-account-operations-threads-number = 2
psql-enable-account-operations-dump = true
psql-force-open-inconsistent = false
psql-livesync-threshold = 10000
```

### `hived` API Endpoint
Configure the IP and port of the endpoints to be made available for API calls.
```ini
webserver-http-endpoint = 0.0.0.0:8091
```

### Enable stale production
```ini
enable-stale-production = 1
required-participation = 0
```

## Start Testnet
Retrieve initminer keys:
```bash
hived
```

Upon starting `hived`, the initminer keypair will be logged as follows:
```
------------------------------------------------------

            STARTING TEST NETWORK

------------------------------------------------------
initminer private key: 5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n
initminer public key: TST6LLegbAgLAy28EHrffBVuANFWcFgmqRMW13wBmTExqFE9SCkg4
chain id: 18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e
blockchain version: 1.27.0
------------------------------------------------------

hived git_revision: "7aabdfa48b1a5af44abf7e33d069567fef190460"
```

Insert the provided private key into `config.ini`:
```ini
witness = "initminer"
private-key = 5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n
```

Then start `hived` again.