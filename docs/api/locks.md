# Locks

:::: warning
**This endpoints return HTLC Locks. HTLC Locks are not operational on Mainnet.**
::::

## List all locks

```
GET /api/v2/locks
```

### Example

```
curl https://dexplorer.ark.io/api/locks
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| page | int | The number of the page that will be returned. | false |
| limit | int | The number of resources per page. | false |
| orderBy | string | Type by which it orders locks. | false |
| recipientId | string | ... | false |
| senderPublicKey | string | ... | false |
| lockId | string | ... | false |
| secretHash | string | ... | false |
| amount | int | ... | false |
| expirationValue | int | ... | false |
| expirationType | int | ... | false |
| isExpired | boolean | ... | false |

### Response

```javascript
{
    "meta": {
        "count": 10,
        "pageCount": 1,
        "totalCount": 10,
        "next": null,
        "previous": null,
        "self": "/locks?page=1&limit=100",
        "first": "/locks?page=1&limit=100",
        "last": "/locks?page=1&limit=100"
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

## Return lock by id

```
GET /api/v2/locks/{lockId}
```

### Example

```
curl https://dexplorer.ark.io/api/locks/0d65f66631e90d71242fc7c09e9e86b68248b546d22678eaa2fa4bbcbffb0184
```

### Response

```java
{
    "data": {
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
    }
}
```

## Search locks

```
GET /api/v2/locks/search
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| page | int | The number of the page that will be returned. | false |
| limit | int | The number of resources per page. | false |
| orderBy | string | Type by which it orders locks. | false |

### Body parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| recipientId | string | ... | false |
| senderPublicKey | string | ... | false |
| lockId | string | ... | false |
| secretHash | string | ... | false |
| amount | int | ... | false |
| timestamp | int | ... | false |
| vendorField | string | ... | false |
| expirationType | int | ... | false |
| expirationValue | int | ... | false |
| isExpired | boolean | ... | false |

### Response

```javascript
{
    "meta": {
        "count": 10,
        "pageCount": 1,
        "totalCount": 10,
        "next": null,
        "previous": null,
        "self": "/locks/search?page=1&limit=100",
        "first": "/locks/search?page=1&limit=100",
        "last": "/locks/search?page=1&limit=100"
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

## Search unlocked

```bash
api/locks/unlocked
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| page | int | The number of the page that will be returned. | false |
| limit | int | The number of resources per page. | false |
| orderBy | string | Type by which it orders locks. | false |

### Body parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| ids | array | Array of lock ids | true |

