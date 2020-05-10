# Wallets

Wallets are addresses containing, or previously having contained ARK. A wallet's public key may be unknown to the network, in that case, it is referred to as a `cold wallet`.

## List All Wallets

A paginated API is provided to obtain all wallets, including empty ones.

### Endpoint

```
GET /api/v2/wallets
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |
| orderBy | string | Type by which it orders wallets. | No |
| address | string | ... | No |
| publicKey | string | ... | No |
| senderPublicKey | string | ... | No |
| vote | string | ... | No |
| username | string | ... | No |
| balance | int | ... | No |
| voteBalance | int | ... | No |
| producedBlocks | int | ... | No |

### Response

```javascript
{
    "meta": {
        "count": 100,
        "pageCount": 1968,
        "totalCount": 196789,
        "next": "/wallets?page=2&limit=100",
        "previous": null,
        "self": "/wallets?page=1&limit=100",
        "first": "/wallets?page=1&limit=100",
        "last": "/wallets?page=1968&limit=100"
    },
    "data": [
        {
            "address": "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
            "publicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff",
            "nonce": "249",
            "balance": "8792440174231098",
            "attributes": {
                "delegate": {
                    "lastBlock": {
                        "id": "13114381566690093367",
                        "height": 1,
                        "timestamp": 0,
                        "generatorPublicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff"
                    }
                }
            },
            "isDelegate": false,
            "isResigned": false
        },
        {
            "address": "DEyaFhDuaoQyKbFH4gJtYZvKkB6umyrEUj",
            "publicKey": "033c59dcdc36944cc28f68c1e4b47ac370fe326e53f9adf5f07764d3e8b74b1838",
            "nonce": "2111",
            "balance": "2000044819999638",
            "attributes": {
                "secondPublicKey": "03820f214bd49a09c636fa366b4b3c1a0dbd2953d14aac7e68a596e0636e662dfb",
                "delegate": {
                    "username": "whalessio",
                    "voteBalance": "0",
                    "forgedFees": "0",
                    "forgedRewards": "0",
                    "producedBlocks": 0,
                    "rank": 291
                },
                "vote": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200"
            },
            "isDelegate": true,
            "isResigned": false,
            "vote": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200"
        },
        {
            "address": "DSyG9hK9CE8eyfddUoEvsga4kNVQLdw2ve",
            "publicKey": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200",
            "nonce": "21578",
            "balance": "150272074652148",
            "attributes": {
                "secondPublicKey": "026de1cd4321a7e78a7b4d8453d1b1ca210eaf991022c55a99e9b0b9ebddbbd502",
                "delegate": {
                    "username": "alessio",
                    "voteBalance": "2001209586209110",
                    "forgedFees": "468407250508",
                    "forgedRewards": "14120600000000",
                    "producedBlocks": 70801,
                    "rank": 1,
                    "lastBlock": {
                        "version": 0,
                        "timestamp": 90793640,
                        "height": 4138753,
                        "previousBlockHex": "274270f5d0e140f8b1c382c6b74afa4aa87256ecfc2cf26b5a597124b3e22b60",
                        "previousBlock": "274270f5d0e140f8b1c382c6b74afa4aa87256ecfc2cf26b5a597124b3e22b60",
                        "numberOfTransactions": 0,
                        "totalAmount": "0",
                        "totalFee": "0",
                        "reward": "200000000",
                        "payloadLength": 0,
                        "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                        "generatorPublicKey": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200",
                        "blockSignature": "3044022019b157d3bce0c8b7bcad4b3fb427af49e92a48e902172d0c17213ba0a6388db1022029bd561d91a36a835b0e6fc3e98a4b2050f5a42fae05c70e0076616fa2b5553e",
                        "idHex": "f1c2b78bcd7904dbfb6a240e3feaacf678e1de64c95fbdd0f6252268538e6f4d",
                        "id": "f1c2b78bcd7904dbfb6a240e3feaacf678e1de64c95fbdd0f6252268538e6f4d"
                    },
                    "round": 81153
                },
                "vote": "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33"
            },
            "isDelegate": true,
            "isResigned": false,
            "vote": "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33"
        },
    ...
    ]
}
```

## Retrieve a Wallet

Specific wallets can be obtained either by their `publicKey` or `address`.

### Endpoint

```
GET /api/v2/wallets/{id}
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Response

```javascript
{
    "data": {
        "address": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
        "publicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
        "nonce": "208",
        "balance": "7919999400",
        "attributes": {
            "htlc": {
                "locks": {},
                "lockedBalance": "0"
            }
        },
        "lockedBalance": "0",
        "isDelegate": false,
        "isResigned": false
    }
}
```

## List All Transactions of a Wallet

All transactions belonging to a wallet can be obtained using this API. Equivalent to `transactions/search` with parameters `senderId` and `recipientId`.

### Endpoint

```
GET /api/v2/wallets/{id}/transactions
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |
| id | string | ... | No |
| blockId | string | ... | No |
| type | int | ... | No |
| typeGroup | int | ... | No |
| version | int | ... | No |
| timestamp | int | ... | No |
| nonce | int | ... | No |
| amount | int | ... | No |
| fee | int | ... | No |
| vendorField | string | ... | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 3,
        "totalCount": 209,
        "next": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions?transform=true&page=1&limit=100",
        "first": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions?transform=true&page=1&limit=100",
        "last": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions?transform=true&page=3&limit=100"
    },
    "data": [
        {
            "id": "f9cb2fb63f53ee947442de910c8f87cb96189899edc6de630b66cbf864fc6fc4",
            "blockId": "8115a42a8f869af2592ccd2ed8a4d5bb5039c12ddc5af10e09b557719b95fe97",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "8246cca14ac3e4158db03c4f881294acc903d32ed11ee06cb29e00b4b9c687e323f4a4ee117a65d2b79d7f0e833f4e36a14fe9a968d48baa6bb301fb1f4eb8e1",
            "confirmations": 159,
            "timestamp": {
                "epoch": 90793352,
                "unix": 1580894552,
                "human": "2020-02-05T09:22:32.000Z"
            },
            "nonce": "208"
        },
        {
            "id": "9b4d9b4630c1bf763889d5b8457dc9c949ede2b2c746bba39d5183fd49199880",
            "blockId": "0d2ac82ffdb189cdc61a1bb09ba040056dd31c92364016dc1d6aa13baf66b8bd",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "1681979fb7c365655b6c14ad03a26f1968e3f588870d7b3f4acd33958c488620e2832f2f8c0d89652a2baff233cb7c8187243e44fa1125e91f23969e24f71bef",
            "confirmations": 326,
            "timestamp": {
                "epoch": 90792008,
                "unix": 1580893208,
                "human": "2020-02-05T09:00:08.000Z"
            },
            "nonce": "207"
        },
        ...
    ]
}
```

## List All Received Transactions of a Wallet

Incoming transactions can be obtained as well, Equivalent to `transactions/search` with parameter `recipientId` set.

### Endpoint

```
GET /api/v2/wallets/{id}/transactions/received
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/received
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |
| id | string | ... | No |
| blockId | string | ... | No |
| type | int | ... | No |
| typeGroup | int | ... | No |
| version | int | ... | No |
| senderPublicKey | string | ... | No |
| senderId | string | ... | No |
| timestamp | int | ... | No |
| nonce | int | ... | No |
| amount | int | ... | No |
| fee | int | ... | No |
| vendorField | string | ... | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 3,
        "totalCount": 202,
        "next": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/received?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/received?transform=true&page=1&limit=100",
        "first": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/received?transform=true&page=1&limit=100",
        "last": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/received?transform=true&page=3&limit=100"
    },
    "data": [
        {
            "id": "8821874e61aed3b19073f9327662ce40f377a6d90b2a9783b88ddd94ddfe63f4",
            "blockId": "3b2980271dc59bde0dd229fd3cb96d29dcc37dcf19fb2932613c7640ef6d171e",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "29",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "signature": "304402202be9f7aaa32ff7455c864d2ac1a86e6051977487b02a501b334e06adc311dff1022002b31ea09f8bdbb64def24b9cd3fbe8948be76ad99657b33e05d21e570cd97a7",
            "vendorField": "Java ? ? ? ?",
            "confirmations": 82383,
            "timestamp": {
                "epoch": 90127344,
                "unix": 1580228544,
                "human": "2020-01-28T16:22:24.000Z"
            },
            "nonce": "201"
        },
        {
            "id": "531a5321b6d3589a11e83088a09c0d263400f1f9b70151583c7b8129f6f8af4c",
            "blockId": "3b2980271dc59bde0dd229fd3cb96d29dcc37dcf19fb2932613c7640ef6d171e",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "28",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "signature": "3045022100aa79b61de7cc6d5b1ca800161f1d750121a2b84aa3a9c2dd9104d7d07d3d41ec02202a0c40333782d10f18dda8c1a7f3022b54de62e449976ffeca0e0e26635dd4ae",
            "vendorField": "Java ? ? ? ?",
            "confirmations": 82383,
            "timestamp": {
                "epoch": 90127344,
                "unix": 1580228544,
                "human": "2020-01-28T16:22:24.000Z"
            },
            "nonce": "200"
        },
        ...
    ]
}
```

## List All Sent Transactions of a Wallet

The inverse of `transactions/received`.

> Note that the balance of a wallet does not equal `totalIncoming - totalOutgoing` if the wallet is a Delegate. You must then also add the total reward from transaction fees and forged blocks to their balance.

### Endpoint

```
GET /api/v2/wallets/{id}/transactions/sent
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/sent
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |
| orderBy | string | Type by which it orders wallets. | No |
| id | string | ... | No |
| blockId | string | ... | No |
| type | int | ... | No |
| typeGroup | int | ... | No |
| version | int | ... | No |
| recipientId | string | ... | No |
| timestamp | int | ... | No |
| nonce | int | ... | No |
| amount | int | ... | No |
| fee | int | ... | No |
| vendorField | string | ... | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 3,
        "totalCount": 208,
        "next": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/sent?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/sent?transform=true&page=1&limit=100",
        "first": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/sent?transform=true&page=1&limit=100",
        "last": "/wallets/D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD/transactions/sent?transform=true&page=3&limit=100"
    },
    "data": [
        {
            "id": "f9cb2fb63f53ee947442de910c8f87cb96189899edc6de630b66cbf864fc6fc4",
            "blockId": "8115a42a8f869af2592ccd2ed8a4d5bb5039c12ddc5af10e09b557719b95fe97",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "8246cca14ac3e4158db03c4f881294acc903d32ed11ee06cb29e00b4b9c687e323f4a4ee117a65d2b79d7f0e833f4e36a14fe9a968d48baa6bb301fb1f4eb8e1",
            "confirmations": 271,
            "timestamp": {
                "epoch": 90793352,
                "unix": 1580894552,
                "human": "2020-02-05T09:22:32.000Z"
            },
            "nonce": "208"
        },
        {
            "id": "9b4d9b4630c1bf763889d5b8457dc9c949ede2b2c746bba39d5183fd49199880",
            "blockId": "0d2ac82ffdb189cdc61a1bb09ba040056dd31c92364016dc1d6aa13baf66b8bd",
            "version": 2,
            "type": 0,
            "typeGroup": 1,
            "amount": "100",
            "fee": "10000000",
            "sender": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
            "senderPublicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
            "recipient": "DBoKkzKAT6YdXhyv1mvcKEg97JxiRqMuK2",
            "signature": "1681979fb7c365655b6c14ad03a26f1968e3f588870d7b3f4acd33958c488620e2832f2f8c0d89652a2baff233cb7c8187243e44fa1125e91f23969e24f71bef",
            "confirmations": 438,
            "timestamp": {
                "epoch": 90792008,
                "unix": 1580893208,
                "human": "2020-02-05T09:00:08.000Z"
            },
            "nonce": "207"
        },
        ...
    ]
}
```

## List All Votes of a Wallet

Returns all votes made by the wallet. Often users create a new wallet instead of recasting their vote, as the former was historically cheaper.

### Endpoint

```
GET /api/v2/wallets/{id}/votes
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 17,
        "pageCount": 1,
        "totalCount": 17,
        "next": null,
        "previous": null,
        "self": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100",
        "first": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100",
        "last": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "16da3b02677ee548445553425ba7d8cf75eb67c6562e2af911ac7300dc074300",
            "blockId": "af33851b0156007e98bc78d8996c02cad0f6c9ed7790071bc70b3abb0f164b38",
            "version": 1,
            "type": 3,
            "typeGroup": 1,
            "amount": "0",
            "fee": "1000000",
            "sender": "DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t",
            "senderPublicKey": "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33",
            "recipient": "DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t",
            "signature": "304402203da2bc42ea8c972c4fa589f82db93e3d17a50db671aca4a87ffbb3440be3519102207933d77c933ef5c912149cb7d126072cc8013151409bed24d544dfbd899f191a",
            "asset": {
                "votes": [
                    "+036b029d87e525e3396acabbb07bd2e8b86704d0c3681e0b4af0e119cbaa1b03c4"
                ]
            },
            "confirmations": 380330,
            "timestamp": {
                "epoch": 79583635,
                "unix": 1569684835,
                "human": "2019-09-28T15:33:55.000Z"
            },
            "nonce": "20"
        },
        {
            "id": "d0b6b08574132741fd804be6b7ecb42a34ab378ec857899171008b12c3792515",
            "blockId": "77113f9b20ffb346b4fd150941f4a3c64f00f9b61fd79854fa50e96774121045",
            "version": 1,
            "type": 3,
            "typeGroup": 1,
            "amount": "0",
            "fee": "1000000",
            "sender": "DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t",
            "senderPublicKey": "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33",
            "recipient": "DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t",
            "signature": "3045022100dd93ed94c0ffa7352af7ad85a7703048ce2056cc1343203b3b49df008fde0af202201db09f96aed3cfc8c49b9ae96fdbde3661e58852761cf49f35f073996891f2da",
            "asset": {
                "votes": [
                    "-03a24de6eb4ca777bc0d6183fdf2aab2f1cc6c2a7736466314f670fe33c8f8b397"
                ]
            },
            "confirmations": 380334,
            "timestamp": {
                "epoch": 79583603,
                "unix": 1569684803,
                "human": "2019-09-28T15:33:23.000Z"
            },
            "nonce": "19"
        },
        ...
    ]
}
```

## List All Top Wallets

Sort the wallets by their balance.

### Endpoint

```
GET /api/v2/wallets/top
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
        "count": 100,
        "pageCount": 1968,
        "totalCount": 196789,
        "next": "/wallets/top?page=2&limit=100",
        "previous": null,
        "self": "/wallets/top?page=1&limit=100",
        "first": "/wallets/top?page=1&limit=100",
        "last": "/wallets/top?page=1968&limit=100"
    },
    "data": [
        {
            "address": "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
            "publicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff",
            "nonce": "249",
            "balance": "8792440174231098",
            "attributes": {
                "delegate": {
                    "lastBlock": {
                        "id": "13114381566690093367",
                        "height": 1,
                        "timestamp": 0,
                        "generatorPublicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff"
                    }
                }
            },
            "isDelegate": false,
            "isResigned": false
        },
        {
            "address": "DEyaFhDuaoQyKbFH4gJtYZvKkB6umyrEUj",
            "publicKey": "033c59dcdc36944cc28f68c1e4b47ac370fe326e53f9adf5f07764d3e8b74b1838",
            "nonce": "2111",
            "balance": "2000044819999638",
            "attributes": {
                "secondPublicKey": "03820f214bd49a09c636fa366b4b3c1a0dbd2953d14aac7e68a596e0636e662dfb",
                "delegate": {
                    "username": "whalessio",
                    "voteBalance": "0",
                    "forgedFees": "0",
                    "forgedRewards": "0",
                    "producedBlocks": 0,
                    "rank": 291
                },
                "vote": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200"
            },
            "isDelegate": true,
            "isResigned": false,
            "vote": "033a5474f68f92f254691e93c06a2f22efaf7d66b543a53efcece021819653a200"
        },
    //... 98 more wallets
  ]
}
```

## Search All Wallets

Searching for specific wallets is possible as well. A direct database query usually is more performant when the query expression becomes complicated.

### Endpoint

```
POST /api/wallets/search
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Body Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| address | string | ... | No |
| publicKey | string | ... | No |
| secondPublicKey | string | ... | No |
| vote | string | ... | No |
| username | string | ... | No |
| balance | object | ... | No |
| balance.from | int | ... | No |
| balance.to | int | ... | No |
| votebalance | object | ... | No |
| votebalance.from | int | ... | No |
| votebalance.to | int | ... | No |

### Response

```javascript
{
  "meta": {
    "count": 2,
    "pageCount": 2,
    "totalCount": 3,
    "next": "/v2/wallets/search?page=2",
    "previous": null,
    "self": "/v2/wallets/search?page=1",
    "first": "/v2/wallets/search?page=1",
    "last": "/v2/wallets/search?page=2"
  },
  "data": [
    {
      "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
      "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231",
      "username": null,
      "secondPublicKey": null,
      "balance": 351774803773,
      "isDelegate": false
    }
  ]
}
```

## List All Locks of a Wallet

### Endpoint

```
GET /api/v2/wallets/{id}/locks
```

### Example

```bash
curl https://api.nos.dev/api/v2/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/locks
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the wallet to be retrieved. | Yes |

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Response

```javascript
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 17,
        "pageCount": 1,
        "totalCount": 17,
        "next": null,
        "previous": null,
        "self": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100",
        "first": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100",
        "last": "/wallets/DEz1Mr4uJ7NaiufwKEj28atCRPTmsUqh9t/votes?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "lockId": "0d65f66631e90d71242fc7c09e9e86b68248b546d22678eaa2fa4bbcbffb0184",
            "amount": "1",
            "secretHash": "09b9a28393efd02fcd76a21b0f0f55ba2aad8f3640ff8cae86de033a9cfbd78c",
            "senderPublicKey": "03591bfd6cd2d6fdce4a740185886c832caaa3bcc166819a25b5860b4303628a31",
            "recipientId": "D7XtDDKh2VrRtz5rtbBicfgSEoEQzEZiNx",
            "timestamp": {
                "epoch": 90728624,
                "unix": 1580829824,
                "human": "2020-02-04T15:23:44.000Z"
            },
            "expirationType": 1,
            "expirationValue": 91144608,
            "isExpired": false,
            "vendorField": "0.8467878683950516"
        },
        {
            "lockId": "152fe67ef5d8d3f14bc3231a260badd6fa9306bfe4a6205d15044ad66bd066ef",
            "amount": "1",
            "secretHash": "09b9a28393efd02fcd76a21b0f0f55ba2aad8f3640ff8cae86de033a9cfbd78c",
            "senderPublicKey": "03591bfd6cd2d6fdce4a740185886c832caaa3bcc166819a25b5860b4303628a31",
            "recipientId": "DQZUzueTvUJb5tnhBCziPYaMnzaoui4F57",
            "timestamp": {
                "epoch": 90728608,
                "unix": 1580829808,
                "human": "2020-02-04T15:23:28.000Z"
            },
            "expirationType": 1,
            "expirationValue": 91144608,
            "isExpired": false,
            "vendorField": "0.6947932468044449"
        },
        ...
    ]
}
```

