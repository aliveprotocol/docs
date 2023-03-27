---
slug: alive-protocol-dev-log-1
title: Alive Protocol Dev Log 1
author: techcoderx
author_title: Alive Core Dev
author_url: https://peakd.com/@techcoderx
author_image_url: https://media.discordapp.net/attachments/415751620706566155/416962590728781824/New_techcoderx_logo.png
tags: [alive,protocol,live,streaming,hls,haf,dev,video]
---

![alive dev log 1.png](https://files.peakd.com/file/peakd-hive/aliveprotocol/23t76y3gDMFmC9iENRR3afWAeGQEiuFTuGoHb52ys88suii4NCA1umPdJStgVxRSdXRWt.png)

Welcome to the first development log of Alive Protocol, since the project began in July 2020. Yes you read that right, this is definitely overdue for an update.

You might have heard about Alive Protocol in some of @techcoderx witness update logs but this is a dedicated post to log recent dev updates.

# What is this even all about!?

Generally speaking, Alive Protocol is an on-chain HLS live streaming protocol. In Hive's context, it is a HAF-based live streaming protocol.

As this is a development log and not a project announcement post, please read the recently updated [documentation](https://aliveprotocol.com/docs) if you would like to find out more about the project.

# Another "Alive"!?

Note that Alive Protocol has nothing to do with 3 (and possibly more) other Hive projects with "Alive" in the name.

Even the name "Hive" was being used by at least [half a dozen](https://peakd.com/hive/@techcoderx/we-might-have-an-issue-here) unrelated entities. Alive Protocol will probably be only known among developers and those who are curious about the inner-workings, while the end users of DApps that uses Alive Protocol will know it as `[insert DApp here] Live`.

# But ser

[Hive-Tube](https://hive-tube.com) already has something similar that is already in production, why this?

Well, the main difference is that this streams on-chain (without being too spammy), and some streamers may prefer to benefit from Hive L1 security and immutability during the live stream.

In federated platforms, unless you own the ~~node~~ **instance** you stream to, the instance owner could stop your ongoing live stream. In that case you will have to start another one in another instance. With Alive Protocol, you can resume your live stream on another service/DApp (as long as you have sufficient RC) and the previous segments that are already published on L1 will remain intact.

# Anyways

It started with being a fork of [SkyLive](https://github.com/DaWe35/SkyLive). Over time through collected feedback and developments, Alive Protocol went through several revisions of its specifications and the development of the protocol has been on and off throughout the years.

Today is the day where there is finally something that can be put together and present in this development log.

# HAF

![Screenshot 2023-03-21 at 8.53.49 PM.png](https://files.peakd.com/file/peakd-hive/aliveprotocol/Eo8KeeHYksRgc85A5gyhcJuMgUxEnm8AawERWnqrG9WSrqZtPrn7VDwdhuxYhnVvNtx.png)

Now that HAF exists, this is definitely one of the projects that can take advantage of the framework among other updates in v1.26 (especially OBI).

[HAlive](https://aliveprotocol.com/docs/halive) will be the streams indexer using the HAF app sync algorithm which also provides an API server that serves the m3u8 playlist of the live streams.

There are still some ways to go for HAlive to be production ready, specifically caching chunk contents into the PostgreSQL database (outside HAF registered tables) for faster m3u8 playlist retrieval.

View the [REST API documentation](https://aliveprotocol.com/docs/halive/rest-api) to learn more about interfacing with HAlive.

# AliveDB, Alive-CLI

AliveDB, the live caching layer for Alive Protocol streams has its GunDB updated to `0.2020.1239`.

It is also now possible for Alive streamer daemon ([Alive-CLI](https://aliveprotocol.com/docs/alivecli)) to use an external AliveDB process instead of having to invoke its own AliveDB instance for every live stream. This will be mostly useful for hosting services and possibly applications for improved UX.

# Documentation

Following the above updates, the [documentation](https://aliveprotocol.com/docs) has been updated and some pages reorganized to reflect the recent changes described above.

![Screenshot 2023-03-27 at 10.15.15 PM.png](https://files.peakd.com/file/peakd-hive/aliveprotocol/23t77MGTgYJSgX4W9Voq2wPQFEZXM9cmwunpZqUyUAczMytVvuxJXT4dprkajVswv7FMw.png)

# What's next

Even though live streaming has been working during testing, the protocol still has some work to do before it is ready for mainnet, especially on UX and streaming performance optimizations.

The full roadmap is available at the Alive Protocol [project board](https://github.com/orgs/aliveprotocol/projects/1).