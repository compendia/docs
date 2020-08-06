# Overview

:::: tip
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
::::

This is the reference guide for the Public API. This API exposes all resources and data provided by a Compendia Core node; and is the preferred way of interacting with the Compendia network. Note that each node has its own internal blockchain and state, meaning it may have forked or be out of sync, causing queries to fail. Monitor your node by comparing it to different public nodes, such as the official [explorer](https://api.nos.dev/api/v2) to ensure you are in sync.

> If you have any problems or requests please [open an issue](https://github.com/compendia/core/issues/new/choose).

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public Testing Relay

If you are not running a relay yourself you can use [https://api.nos.dev/](https://api.nos.dev/) to test API calls. Happy developing!

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