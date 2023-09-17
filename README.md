# Alive Protocol Docs

Landing page and documentation of Alive Protocol. Created using [Docusaurus 2](https://v2.docusaurus.io).

Production website is reachable at https://aliveprotocol.com.

## Installation

```console
pnpm i
```

## Local Development

```console
pnpm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Using [ipfs-deploy](https://github.com/ipfs-shipyard/ipfs-deploy):
```console
ipd build/
```

### Using [Fleek](https://fleek.co):

Build command: `curl -fsSL https://get.pnpm.io/install.sh | sh -; pnpm i; pnpm run build;`
Publish directory: `build`

Docusaurus does not support hash routing, hence it is required to access the webpage with base32 CID v1 hash on a subdomain. To convert CID v0 hashes:
```console
ipfs cid base32 <cid>
```