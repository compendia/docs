# Node

The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.

> Note that these parameters are returned by the specific Node and that other nodes might adhere to a different set of parameters.

## Retrieve the Configuration

Used to access a Node's configuration and the network it is attached to \(identified by the `nethash`\).

### Endpoint

```
GET /api/v2/node/configuration
```

### Example

```bash
curl https://api.nos.dev/api/v2/node/configuration
```

### Response

```javascript
{
  "data": {
    "core": {
      "version": "2.8.0"
    },
    "nethash": "e8c5243c53bd6809a52f0c6fdcfd2c9ee3410e0650243e82df5074d9ea6405ae",
    "slip44": 1,
    "wif": 170,
    "token": "NOS",
    "symbol": "◎",
    "explorer": "https://explorer.nos.dev",
    "version": 90,
    "ports": {
      "@arkecosystem/core-p2p": null,
      "@arkecosystem/core-api": 4003
    },
    "constants": {
      "height": 852815,
      "p2p": {
        "minimumVersions": [
          "^2.8.0"
        ]
      },
      "reward": 390000000,
      "topDelegates": 5,
      "topReward": 484000000,
      "activeDelegates": 47,
      "blocktime": 6,
      "block": {
        "version": 0,
        "maxTransactions": 150,
        "maxPayload": 6300000,
        "acceptExpiredTransactionTimestamps": false,
        "idFullSha256": true
      },
      "epoch": "2020-03-03T20:30:00.000Z",
      "fees": {
        "staticFees": {
          "transfer": 10000000,
          "secondSignature": 50000000,
          "delegateRegistration": 10000000000,
          "vote": 100000000,
          "multiSignature": 10000000,
          "multiPayment": 10000000,
          "delegateResignation": 2500000000,
          "stakeCreate": 0,
          "stakeRedeem": 0,
          "stakeCancel": 10000000,
          "setFile": 0
        },
        "specialFees": {
          "setFile": 10000000
        }
      },
      "balancePower": 1,
      "stakeLevels": {
        "86400": 25,
        "7889400": 50,
        "15778800": 75,
        "31557600": 100
      },
      "minimumStake": 10000000000,
      "ipfs": {
        "maxFileSize": {
          "description": 30000,
          "logo": 300000
        }
      },
      "vendorFieldLength": 0,
      "multiPaymentLimit": 64,
      "aip11": true,
      "graceEnd": 3600,
      "powerUp": 82800
    },
    "transactionPool": {
      "dynamicFees": {
        "enabled": false
      }
    }
  }
}
```

## Retrieve the Cryptography Configuration

Used to access a Node's configuration for the `@arkecosystem/crypto` package that handles all cryptography operations.

### Endpoint

```
GET /api/v2/node/configuration/crypto
```

### Example

```bash
curl https://api.nos.dev/api/v2/node/configuration/crypto
```

### Response

```javascript
{
   "data":{
      "exceptions":{},
      "genesisBlock":{
         "version":0,
         "totalAmount":"12500000000000000",
         "totalFee":"0",
         "reward":"0",
         "payloadHash":"d9acd04bde4234a81addb8482333b4ac906bed7be5a9970ce8ada428bd083192",
         "timestamp":0,
         "numberOfTransactions":153,
         "payloadLength":35960,
         "previousBlock":null,
         "generatorPublicKey":"03b47f6b6719c76bad46a302d9cff7be9b1c2b2a20602a0d880f139b5b8901f068",
         "transactions":[
            {
               "type":0,
               "amount":"245098000000000",
               "fee":"0",
               "recipientId":"AHXtmB84sTZ9Zd35h9Y1vfFvPE2Xzqj8ri",
               "timestamp":0,
               "asset":{

               },
               "senderPublicKey":"035b63b4668ee261c16ca91443f3371e2fe349e131cb7bf5f8a3e93a3ddfdfc788",
               "signature":"304402205fcb0677e06bde7aac3dc776665615f4b93ef8c3ed0fddecef9900e74fcb00f302206958a0c9868ea1b1f3d151bdfa92da1ce24de0b1fcd91933e64fb7971e92f48d",
               "id":"db1aa687737858cc9199bfa336f9b1c035915c30aaee60b1e0f8afadfdb946bd"
            },
            ...
         ],
         "height":1,
         "id":"17184958558311101492",
         "blockSignature":"304402202fe5de5697fa25d3d3c0cb24617ac02ddfb1c915ee9194a89f8392f948c6076402200d07c5244642fe36afa53fb2d048735f1adfa623e8fa4760487e5f72e17d253b"
      },
      "milestones":[
         {
            "height":1,
            "reward":0,
            "activeDelegates":51,
            "blocktime":8,
            "block":{
               "version":0,
               "maxTransactions":150,
               "maxPayload":2097152
            },
            "epoch":"2017-03-21T13:00:00.000Z",
            "fees":{
               "staticFees":{
                  "transfer":10000000,
                  "secondSignature":500000000,
                  "delegateRegistration":2500000000,
                  "vote":100000000,
                  "multiSignature":500000000,
                  "ipfs":500000000,
                  "timelockTransfer":0,
                  "multiPayment":0,
                  "delegateResignation":2500000000
               }
            },
            "vendorFieldLength":64,
            "aip11":true
         },
         {
            "height":75600,
            "reward":200000000,
            "activeDelegates":51,
            "blocktime":8,
            "block":{
               "version":0,
               "maxTransactions":150,
               "maxPayload":2097152
            },
            "epoch":"2017-03-21T13:00:00.000Z",
            "fees":{
               "staticFees":{
                  "transfer":10000000,
                  "secondSignature":500000000,
                  "delegateRegistration":2500000000,
                  "vote":100000000,
                  "multiSignature":500000000,
                  "ipfs":500000000,
                  "timelockTransfer":0,
                  "multiPayment":0,
                  "delegateResignation":2500000000
               }
            },
            "vendorFieldLength":64,
            "aip11":true
         },
         {
            "height":100000,
            "reward":200000000,
            "activeDelegates":51,
            "blocktime":8,
            "block":{
               "version":0,
               "maxTransactions":150,
               "maxPayload":2097152
            },
            "epoch":"2017-03-21T13:00:00.000Z",
            "fees":{
               "staticFees":{
                  "transfer":10000000,
                  "secondSignature":500000000,
                  "delegateRegistration":2500000000,
                  "vote":100000000,
                  "multiSignature":500000000,
                  "ipfs":500000000,
                  "timelockTransfer":0,
                  "multiPayment":0,
                  "delegateResignation":2500000000
               }
            },
            "vendorFieldLength":255,
            "aip11":true
         },
         {
            "height":1000000000,
            "reward":200000000,
            "activeDelegates":51,
            "blocktime":8,
            "block":{
               "version":0,
               "maxTransactions":150,
               "maxPayload":2097152,
               "idFullSha256":true
            },
            "epoch":"2017-03-21T13:00:00.000Z",
            "fees":{
               "staticFees":{
                  "transfer":10000000,
                  "secondSignature":500000000,
                  "delegateRegistration":2500000000,
                  "vote":100000000,
                  "multiSignature":500000000,
                  "ipfs":500000000,
                  "timelockTransfer":0,
                  "multiPayment":0,
                  "delegateResignation":2500000000
               }
            },
            "vendorFieldLength":255,
            "aip11":true
         }
      ],
      "network":{
         "name":"testnet",
         "messagePrefix":"TEST message:\n",
         "bip32":{
            "public":70617039,
            "private":70615956
         },
         "pubKeyHash":23,
         "nethash":"d9acd04bde4234a81addb8482333b4ac906bed7be5a9970ce8ada428bd083192",
         "wif":186,
         "slip44":1,
         "aip20":0,
         "client":{
            "token":"TARK",
            "symbol":"TѦ",
            "explorer":"http://texplorer.ark.io"
         }
      }
   }
}
```

## Retrieve the Fee Statistics

Used to access a Node's fee statistics.

### Endpoint

```
GET /api/v2/node/fees
```

### Example

```bash
curl https://api.nos.dev/api/v2/node/fees
```

### Query Parameters

| Name | Type  | Description                                | Required |
| :--- | :---: | :----------------------------------------- | :------: |
| days |  int  | The number of days which will be regarded. |    No    |

### Response

```javascript
{
  "meta": {
    "days": 7
  },
  "data": [
    {
      "type": "0",
      "min": "192309",
      "max": "100000000",
      "avg": "653891",
      "sum": "2820887339",
      "median": "460000"
    },
    {
      "type": "3",
      "min": "1822918",
      "max": "73422894",
      "avg": "59645587",
      "sum": "715747046",
      "median": "68488514"
    }
  ]
}
```

## Retrieve the Status

The status allows for health checking, showing if the node is in sync with the network.

### Endpoint

```
GET /api/v2/node/status
```

### Example

```bash
curl https://api.nos.dev/api/v2/node/status
```

### Response

```javascript
{
  "data": {
    "synced": false,
    "now": 3034451,
    "blocksCount": -36
  }
}
```

## Retrieve the Syncing Status

The `syncing` resource is very much alike `node/status`, providing information on the syncing progress. If a node is not syncing but significantly behind in blocks, it might be time to perform a check.

### Endpoint

```
GET /api/v2/node/syncing
```

### Example

```bash
curl https://api.nos.dev/api/v2/node/syncing
```

### Response

```javascript
{
  "data": {
    "syncing": true,
    "blocks": -36,
    "height": 3034451,
    "id": "5444078994968869529"
  }
}
```

## Node debug

### Endpoint

```bash
GET /api/v2/node/debug
```

### Response

```bash
[2020-02-04 08:46:35.849] INFO : Previous block 4,127,674 pinged blockchain 75 times
[2020-02-04 08:46:35.849] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:46:35.851] DEBUG: Delegate genesis_40 (026a423b3323de175dd82788c7eab57850c6a37ea6a470308ebadd7007baf8ceb3) allowed to forge block 4,127,675
[2020-02-04 08:46:35.856] DEBUG: event 'PROCESSFINISHED': "newBlock" -> "idle" -> actions: [checkLater, blockchainReady]
[2020-02-04 08:46:36.470] INFO : Broadcasting block 4,127,675 to 129 peers
[2020-02-04 08:46:44.108] INFO : Received new block at height 4,127,676 with 0 transactions from 167.114.43.33
[2020-02-04 08:46:44.111] INFO : Previous block 4,127,675 pinged blockchain 93 times
[2020-02-04 08:46:44.112] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:46:44.120] DEBUG: Delegate darkgalp (037997a6553ea8073eb199e9f5ff23b8f0892e79433ef35e13966e0a12849d02e3) allowed to forge block 4,127,676
[2020-02-04 08:46:44.477] INFO : Broadcasting block 4,127,676 to 0 peers
[2020-02-04 08:46:44.478] DEBUG: event 'PROCESSFINISHED': "newBlock" -> "idle" -> actions: [checkLater, blockchainReady]
[2020-02-04 08:46:47.703] INFO : 116.203.31.18 has downloaded 400 blocks from height 4,016,181
[2020-02-04 08:46:48.180] INFO : 213.49.134.118 has downloaded 400 blocks from height 4,016,181
[2020-02-04 08:46:51.769] INFO : Received new block at height 4,127,677 with 0 transactions from 167.114.29.40
[2020-02-04 08:46:51.775] INFO : Previous block 4,127,676 pinged blockchain 25 times
[2020-02-04 08:46:51.776] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:46:51.872] DEBUG: Delegate splitice (02138ee0745083fd508c30c750e5e52d0e38a7f4efba8d86d4dd6f8ff12365b5d0) allowed to forge block 4,127,677
[2020-02-04 08:46:52.420] INFO : Broadcasting block 4,127,677 to 0 peers
[2020-02-04 08:46:52.421] DEBUG: event 'PROCESSFINISHED': "newBlock" -> "idle" -> actions: [checkLater, blockchainReady]
[2020-02-04 08:46:59.455] INFO : Received new block at height 4,127,678 with 0 transactions from 167.114.43.42
[2020-02-04 08:46:59.455] INFO : Previous block 4,127,677 pinged blockchain 59 times
[2020-02-04 08:46:59.455] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:46:59.525] DEBUG: Delegate notsupercool (03ca6e1face6f6c934e0ade6f8a72aac7eaba3ac20bf78dbf04686715eb415021b) allowed to forge block 4,127,678
[2020-02-04 08:46:59.700] INFO : Broadcasting block 4,127,678 to 0 peers
[2020-02-04 08:46:59.701] DEBUG: event 'PROCESSFINISHED': "newBlock" -> "idle" -> actions: [checkLater, blockchainReady]
[2020-02-04 08:47:00.526] INFO : 213.49.134.118 has downloaded 400 blocks from height 4,016,181
[2020-02-04 08:47:06.948] INFO : Received new block at height 4,127,679 with 0 transactions from 167.114.29.46
[2020-02-04 08:47:06.949] INFO : Previous block 4,127,678 pinged blockchain 20 times
[2020-02-04 08:47:06.949] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:47:06.950] DEBUG: Delegate genesis_14 (03f3512aa9717b2ca83d371ed3bb2d3ff922969f3ceef92f65c060afa2bc2244fb) allowed to forge block 4,127,679
[2020-02-04 08:47:06.960] DEBUG: event 'PROCESSFINISHED': "newBlock" -> "idle" -> actions: [checkLater, blockchainReady]
[2020-02-04 08:47:07.534] INFO : Broadcasting block 4,127,679 to 129 peers
[2020-02-04 08:47:16.286] INFO : Received new block at height 4,127,680 with 0 transactions from 167.114.29.59
[2020-02-04 08:47:16.287] INFO : Previous block 4,127,679 pinged blockchain 53 times
[2020-02-04 08:47:16.305] DEBUG: event 'NEWBLOCK': "idle" -> "newBlock"
[2020-02-04 08:47:16.311] DEBUG: Delegate alexxio (0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33) allowed to forge block 4,127,680
```

