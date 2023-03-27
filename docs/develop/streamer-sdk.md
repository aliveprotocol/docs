---
id: streamer-sdk
title: Streamer SDK
description: Usage documentation for Alive Protocol streamer SDK
---

The [Alive-CLI](/docs/alivecli) core daemon can be imported into any Python applications, enabling the said application to stream through Alive Protocol.

:::info
This may also be useful for developers to quickly start a test stream by using the SDK to define the required variables in a Python script.
:::

## AliveDB

### Installation

AliveDB can be installed in the system from the SDK. By default, the repository is cloned into `~/.alive`.

```python
from alivedb import alivedb_install

alivedb_install(alivedir='/path/to/new/alivedb/installation')
```

### Initialization (local node)

The AliveDB instance may be invoked locally as follows:

```python
from alivedb import AliveDB

alivedb_instance = AliveDB(
    alivedir='/path/to/alivedb/installation',
    peers=[] # bootstrap peers
)
alivedb_instance.start()
alivedb_instance.login(
    key='unsafePassword',
    pub='alivedb_public_key_here',
)
```

### Initialization (external process)

An AliveDB node running externally may be invoked as follows:

```python
alivedb_instance = AliveDB(alivedir='http://localhost:3006')
```

### Login Check

:::note
An `AliveDB` object connected to an external AliveDB process will always return `True` when calling this method.
:::

Check if any user is logged in. Returns `Bool`.

```python
alivedb_instance.is_logged_in() # True/False
```

### User Registration

:::note
An `AliveDB` object connected to an external AliveDB process will throw an `AssertionError` when trying to create accounts from here.
:::

Create an AliveDB user that will be used to push streams. If created successfully, the new user is logged in automatically.

```python
alivedb_instance.create_user('userid','unsafePassword')

print('User ID: ' + alivedb_instance.userid) # User ID
print('Public Key: ' + alivedb_instance.userpub) # AliveDB Public Key
```

## Alive Daemon

### Initialization

```python
from stream_hls import AliveDaemon, AliveInstance
from signal import signal, SIGINT

alive_instance = AliveInstance(
    data_dir='~/.alive',
    record_folder='record_here',
    protocol='IPFS',
    upload_endpoint='http://127.0.0.1:5001',
    network='hive',
    api='http://localhost:8092',
    halive_api='http://localhost:3010',
    username='aliveprotocol',
    private_key='wif_private_key_here',
    link='stream1',
    batch_interval=300
)
```

### Starting Daemon
```python
alive_daemon = AliveDaemon(instance=alive_instance, alivedb_instance=alivedb_instance)
signal(SIGINT,alive_daemon.sigint_handler)
alive_daemon.start_worker()
```

### Stopping Daemon

Useful for certain applications to stop the daemon during the application runtime (not SIGINT).
```python
alive_daemon.stop_worker(False)
```

## Putting it together

```python
from stream_hls import AliveDaemon, AliveInstance
from alivedb import AliveDB
from signal import signal, SIGINT

alivedb_instance = AliveDB(alivedir='http://localhost:3006')

alive_instance = AliveInstance(
    data_dir='~/.alive',
    record_folder='record_here',
    protocol='IPFS',
    upload_endpoint='http://127.0.0.1:5001',
    network='hive',
    api='http://localhost:8092',
    halive_api='http://localhost:3010',
    username='aliveprotocol',
    private_key='wif_private_key_here',
    link='stream1',
    batch_interval=300
)
alive_daemon = AliveDaemon(instance=alive_instance, alivedb_instance=alivedb_instance)
signal(SIGINT,alive_daemon.sigint_handler)
alive_daemon.start_worker()
```