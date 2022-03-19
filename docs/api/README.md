# Overview

:::: tip
Compendia is built with the [ARK Core Framework](https://api.ark.dev). Therefore, with the exception of some unique features (e.g. staking), the APIs follows roughly the same standard as **ARK Public Network**.
::::

This is the reference guide for the Public API. This API exposes all resources and data provided by a Compendia Core node; and is the preferred way of interacting with the Compendia network. Note that each node has its own internal blockchain and state, meaning it may have forked or be out of sync, causing queries to fail. Monitor your node by comparing it to different public nodes, such as the official [explorer](https://api.compendia.org/api/v2) to ensure you are in sync.

> If you have any problems or requests please [open an issue](https://github.com/compendia/core/issues/new/choose).

:::: tip
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
::::

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public Testing Relay

If you are not running a relay yourself you can use [https://api.nos.dev/](https://api.nos.dev/) to test API calls. Happy developing!

## Public Mainnet Relay

If you're looking to make mainnet calls, you should run your own relay node for reliability. While developing, feel free to use our public mainnet endpoint [https://api.compendia.org/api/v2](https://api.compendia.org/api/v2).

## Endpoints

* [Blockchain](./blockchain.md)
* [Blocks](./blocks.md)
* [Delegates (Validators)](./delegates.md)
* [HTLC Locks](./locks.md)
* [Node](./node.md)
* [Peers](./peers.md)
* [Rounds](./rounds.md)
* [Transactions](./transactions.md)
* [Votes](./votes.md)
* [Wallets](./wallets.md)
