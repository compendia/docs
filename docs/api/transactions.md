# Transactions

Transactions are signed, serialized payloads; batched together to form a block.

## Create a Transaction

Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialization protocol. Our [crypto SDKs](https://sdk.ark.dev) provide the functionality needed in most major programming languages. You can read more about it in the send transaction section.

### Endpoint

```
POST /api/v2/transactions
```

### Body Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| transactions | array | The list of transactions to create. | Yes |

### Response

```javascript
{
  "data": {
    "accept": [
      "15d4b3e933b79e5172bbf14c2bd3f92d927394cd8ebd102f18dcc2203af363ca",
      "c48862c4df75a8b0859b559658c757c1c289088488630494fe51613db0747e57",
      "bd10b25444363252e0787e46f5cac90797d08a0c34d507a10d064c94cccf6226"
    ],
    "broadcast": [
      "15d4b3e933b79e5172bbf14c2bd3f92d927394cd8ebd102f18dcc2203af363ca",
      "c48862c4df75a8b0859b559658c757c1c289088488630494fe51613db0747e57",
      "bd10b25444363252e0787e46f5cac90797d08a0c34d507a10d064c94cccf6226"
    ],
    "excess": [],
    "invalid": []
  },
  "errors": null
}
```

## Retrieve a Transaction

Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).

### Endpoint

```
GET /api/v2/transactions/{id}
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the transaction to be retrieved. | Yes |

### Response

```javascript
{
    "data": {
        "id": "f31b0c1f05798ccd78c600b8d2c1d53ea79b5768aaa30e1f16fa78af4798e7d4",
        "blockId": "96172a1dc70db3deba61c2619a1a6ca56e1e6a2358581436880ba94ca97c7d8e",
        "version": 2,
        "type": 0,
        "typeGroup": 1,
        "amount": "16000002",
        "fee": "10000000",
        "sender": "DRgh1n8oyGHDE6xXVq4yhh3sSajAr7uHJY",
        "senderPublicKey": "03153c994e5306b2fbba9bb533f22871e12e4c1d1d3960d1eeef385ab143b258b4",
        "recipient": "DQZvBNDDP6De4m419dJcnd9hXEuMUCK1eE",
        "signature": "2f954291cca7e0b0055879a81f406e7fc1a4f80b7436ff27a8a8c9c100b99f85948dff0dd5eff0d591baac57439694a7830cf3a424ba7d671d350cbeb27742f5",
        "vendorField": "deadlock - Cryptology TBW License Fee.",
        "confirmations": 293,
        "timestamp": {
            "epoch": 90878408,
            "unix": 1580979608,
            "human": "2020-02-06T09:00:08.000Z"
        },
        "nonce": "9814"
    }
}
```

## List All Transactions

The paginated API is used to query for multiple transactions. You can apply _filters_ through the query parameter to search for specific transactions.

### Endpoint

```
GET /api/v2/transactions
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |
| type | int | The transaction type to be retrieved. | No |
| blockId | int | The block id to be retrieved. | No |
| id | int | The transaction id to be retrieved. | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 9871,
        "totalCount": 987028,
        "next": "/transactions?type=0&transform=true&page=2&limit=100",
        "previous": null,
        "self": "/transactions?type=0&transform=true&page=1&limit=100",
        "first": "/transactions?type=0&transform=true&page=1&limit=100",
        "last": "/transactions?type=0&transform=true&page=9871&limit=100"
    },
    "data": [
        {
            "id": "f31b0c1f05798ccd78c600b8d2c1d53ea79b5768aaa30e1f16fa78af4798e7d4",
            "blockId": "96172a1dc70db3deba61c2619a1a6ca56e1e6a2358581436880ba94ca97c7d8e",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "16000002",
            "fee": "10000000",
            "sender": "DRgh1n8oyGHDE6xXVq4yhh3sSajAr7uHJY",
            "senderPublicKey": "03153c994e5306b2fbba9bb533f22871e12e4c1d1d3960d1eeef385ab143b258b4",
            "recipient": "DQZvBNDDP6De4m419dJcnd9hXEuMUCK1eE",
            "signature": "2f954291cca7e0b0055879a81f406e7fc1a4f80b7436ff27a8a8c9c100b99f85948dff0dd5eff0d591baac57439694a7830cf3a424ba7d671d350cbeb27742f5",
            "vendorField": "deadlock - Cryptology TBW License Fee.",
            "confirmations": 183,
            "timestamp": {
                "epoch": 90878408,
                "unix": 1580979608,
                "human": "2020-02-06T09:00:08.000Z"
            },
            "nonce": "9814"
        },
        {
            "id": "e05a744006b0bd3b076e49607e17b47e4903617ff4a5885233e7e2a18efc9bc3",
            "blockId": "96172a1dc70db3deba61c2619a1a6ca56e1e6a2358581436880ba94ca97c7d8e",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "383999994",
            "fee": "10000000",
            "sender": "DRgh1n8oyGHDE6xXVq4yhh3sSajAr7uHJY",
            "senderPublicKey": "03153c994e5306b2fbba9bb533f22871e12e4c1d1d3960d1eeef385ab143b258b4",
            "recipient": "DEQ7hCkvDrx6xxsr2NGKFQ1NoMispqqzDf",
            "signature": "ef7c29904715e7504a119f698911f4f347279a2131f5734ed01cdbc0a0d24876365b42a0f6264af52c987b543d7c51aee5327af8c522a03a7dff25cd7614fc97",
            "vendorField": "deadlock - ",
            "confirmations": 183,
            "timestamp": {
                "epoch": 90878408,
                "unix": 1580979608,
                "human": "2020-02-06T09:00:08.000Z"
            },
            "nonce": "9813"
        },
        ...
    ]
}
```

## List All Unconfirmed Transaction

Unconfirmed transactions have not been incorporated in the blockchain, but reside in the mempool. Although usually the mempool is cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time. If you have set the transaction with a fee of near zero, it might not be picked up by a Delegate and will time out.

### Endpoint

```
GET /api/v2/transactions/unconfirmed
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Response

```javascript
{
    "meta": {
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/transactions/unconfirmed?transform=true&page=1&limit=100",
        "first": "/transactions/unconfirmed?transform=true&page=1&limit=100",
        "last": "/transactions/unconfirmed?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "2f43b1487dc97a9cd61adce53a2cb8bbf6873aea5fd5f7cbe06f2a1e60c66e39",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "bafbfcb6eb792512be2261b18574afbcfc26ab604f2b9a96199b55d70aab7deb9ab66eaf03508ed6127b6a64b5c7e433de26d108846be1f1be57d779b3d3d73c",
            "confirmations": 0,
            "nonce": "218"
        }
    ]
}
```

## Get an Unconfirmed Transaction

As with confirmed transactions, you may query for unconfirmed transactions directly.

### Endpoint

```
GET /api/v2/transactions/unconfirmed/{id}
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the transaction to be retrieved. | Yes |

### Response

```javascript
{
    "data": 
        {
            "id": "2f43b1487dc97a9cd61adce53a2cb8bbf6873aea5fd5f7cbe06f2a1e60c66e39",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "bafbfcb6eb792512be2261b18574afbcfc26ab604f2b9a96199b55d70aab7deb9ab66eaf03508ed6127b6a64b5c7e433de26d108846be1f1be57d779b3d3d73c",
            "confirmations": 0,
            "nonce": "218"
        }
}
```

## Search for Transactions

For fine-grained searches, use the `search` endpoint. Note that unless you use specific body parameters, the response might contain a large number of transactions \(hundreds of thousands\). It is best to filter as many transactions node side, instead of dissecting the response client side.

:::: tip
**Asset** field can be searched with this transaction endpoint. All the **asset** fields introduced with a custom transaction or existing core transaction types are **asset** searchable by default \(see example below\).
::::

### Endpoint

```
POST /api/v2/transactions/search
```

### Example

```bash
curl -H "Content-Type: application/json" \
  -X POST \
  -d '{ "asset": { "ipfs": "QmT2yUde9NFsX6J7y97VGu8CeA5tLEshu5V7PVHeRqUcDA" } }' \
  https://api.nos.dev/api/v2/transactions/search | jq
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Body Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| orderBy | string | ... | No |
| id | string | ... | No |
| blockId | string | ... | No |
| type | int | ... | No |
| version | int | ... | No |
| senderPublicKey | string | ... | No |
| senderId | string | ... | No |
| recipientId | string | ... | No |
| ownerId | string | ... | No |
| vendorFieldHex | string | ... | No |
| timestamp | object | ... | No |
| timestamp.from | int | ... | No |
| timestamp.to | int | ... | No |
| amount | object | ... | No |
| amount.from | int | ... | No |
| amount.to | int | ... | No |
| fee | object | ... | No |
| fee.from | int | ... | No |
| fee.to | int | ... | No |
| asset | object | ... | No |

### Response

```javascript
{
  "meta": {
    "Count": 1,
    "PageCount": 79382,
    "totalCount": 79382,
    "next": "/api/v2/transactions/search?limit=1&page=2",
    "previous": null,
    "self": "/api/v2/transactions/search?limit=1&page=1",
    "first": "/api/v2/transactions/search?limit=1&page=1",
    "last": "/api/v2/transactions/search?limit=1&page=79382"
  },
  "data": [
    {
      "id": "026fbc15cf630e8fc2a3e963d2c436c744d880611a468b34b85145e181b80dc0",
      "blockId": "14085724014999449555",
      "version": 1,
      "type": 0,
      "amount": 737042,
      "fee": 344000,
      "sender": "DMzBk3g7ThVQPYmpYDTHBHiqYuTtZ9WdM3",
      "recipient": "DN8nGwcNbE3YcnZYFp8uvvc9z4WWDbytWK",
      "signature": "3045022100cb2c2d9086188f4b09c97b99374da91579d15c99206bbb04512053922cb0209f022026a4676483d1162eaafd64d2acfa43413e02f587922cf55f3205bbf509bd118b",
      "vendorField": "Yooooooloooooo",
      "confirmations": 103,
      "timestamp": {
        "epoch": 56388434,
        "unix": 1546489634,
        "human": "2019-01-03T04:27:14.000Z"
      }
    }
  ]
}
```

## Get Transaction Types


### Endpoint

```
GET /api/v2/transactions/types
```

### Response

```javascript
{
    "data": {
        "1": {
            "Transfer": 0,
            "SecondSignature": 1,
            "DelegateRegistration": 2,
            "Vote": 3,
            "MultiSignature": 4,
            "Ipfs": 5,
            "MultiPayment": 6,
            "DelegateResignation": 7,
            "HtlcLock": 8,
            "HtlcClaim": 9,
            "HtlcRefund": 10
        },
        "2": {
            "BusinessRegistration": 0,
            "BusinessResignation": 1,
            "BusinessUpdate": 2,
            "BridgechainRegistration": 3,
            "BridgechainResignation": 4,
            "BridgechainUpdate": 5
        }
    }
}
```

## Get Transaction Fees \(Non-Dynamic\)

The static transaction fees are significantly higher than the dynamic transaction fees. Use the [node resource](https://github.com/ArkEcosystem/gitbooks-api/tree/9815499ca52e615b8de858160da915cd960e6ea3/api/public/v2/node.html#retrieve-the-configuration) to find dynamic fees, and prefer using these.

### Endpoint

```
GET /api/v2/transactions/fees
```

### Response

```javascript
{
    "data": {
        "1": {
            "transfer": "10000000",
            "secondSignature": "500000000",
            "delegateRegistration": "2500000000",
            "vote": "100000000",
            "multiSignature": "500000000",
            "ipfs": "500000000",
            "multiPayment": "10000000",
            "delegateResignation": "2500000000",
            "htlcLock": "10000000",
            "htlcClaim": "0",
            "htlcRefund": "0"
        },
        "2": {
            "businessRegistration": "5000000000",
            "businessResignation": "5000000000",
            "businessUpdate": "5000000000",
            "bridgechainRegistration": "5000000000",
            "bridgechainResignation": "5000000000",
            "bridgechainUpdate": "5000000000"
        }
    }
}
```

## Get transaction schemas

### Endpoint

```bash
/api/v2/transactions/schemas
```

### Response

```bash
{
    "data": {
        "1": {
            "0": {
                "id": {
                    "anyOf": [
                        {
                            "$ref": "transactionId"
                        },
                        {
                            "type": "null"
                        }
                    ]
                },
                "version": {
                    "enum": [
                        1,
                        2
                    ]
                },
                "network": {
                    "$ref": "networkByte"
                },
                "timestamp": {
                    "type": "integer",
                    "minimum": 0
                },
                "nonce": {
                    "bignumber": {
                        "minimum": 0
                    }
                },
                "typeGroup": {
                    "type": "integer",
                    "minimum": 0
                },
                "amount": {
                    "bignumber": {
                        "minimum": 1,
                        "bypassGenesis": true
                    }
                },
                "fee": {
                    "bignumber": {
                        "minimum": 1,
                        "bypassGenesis": true
                    }
                },
                "senderPublicKey": {
                    "$ref": "publicKey"
                },
                "signature": {
                    "$ref": "alphanumeric"
                },
                "secondSignature": {
                    "$ref": "alphanumeric"
                },
                "signSignature": {
                    "$ref": "alphanumeric"
                },
                "signatures": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 16,
                    "additionalItems": false,
                    "uniqueItems": true,
                    "items": {
                        "allOf": [
                            {
                                "minLength": 130,
                                "maxLength": 130
                            },
                            {
                                "$ref": "alphanumeric"
                            }
                        ]
                    }
                },
                "type": {
                    "transactionType": 0
                },
                "vendorField": {
                    "anyOf": [
                        {
                            "type": "null"
                        },
                        {
                            "type": "string",
                            "format": "vendorField"
                        }
                    ]
                },
                "recipientId": {
                    "$ref": "address"
                },
                "expiration": {
                    "type": "integer",
                    "minimum": 0
                }
            },
        ...
```

