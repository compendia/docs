# Rounds

## List rounds data

### Endpoint

```
/rounds/{roundNumber}/delegates
```

### Path parameters

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| roundNumber | int | The number of wanted round. | true |

### Example

```
curl https://api.nos.dev/api/v2/rounds/5000/delegates
```

### Response

```javascript
{
    "data": [
        {
            "publicKey": "03bbfb43ecb5a54a1e227bb37b5812b5321213838d376e2b455b6af78442621dec",
            "votes": "50583674434334"
        },
        {
            "publicKey": "02215cbe21074d065f3d090f53284e8104c2dc6282ba50bf155adcdfdbcfe325d5",
            "votes": "1898260000000"
        },
        {
            "publicKey": "03a2f2ce2aebd426d353bf3abf2c00a85e3122070bbeaa04b73eba2a6119dbc620",
            "votes": "1877490000000"
        },
        .........
        .........
        ......... 
        {
            "publicKey": "028dc808bd35583b28c6b12e09e6ae1e1dddd36a0bff4e5467d95d920b3caa4867",
            "votes": "623881000000"
        },
        {
            "publicKey": "0304d0c477d634cc85d89c1a4afee8f51168d1747fe8fd79cabc26565e49eb8a7a",
            "votes": "592380000000"
        },
        {
            "publicKey": "032e2dc53b703a1fc9763008c5cfbdf1eb7b2e52ce4c0998b790b5d08430e3720a",
            "votes": "562220000000"
        }
    ]
}
```

