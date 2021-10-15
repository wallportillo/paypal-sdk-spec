## ResponseType

The `responseType` prop expects one of two possible values (`code`, `id_token`) which determines the output for [onApprove callback](../../callbacks/onApprove-auth.md) function.

### ResponseType `code`

```javascript
paypal.AuthButton({
    scopes: ['openid', 'profile', 'email', 'address', 'phone'],
    responseType: 'code',
    onApprove: data => {
        // this will return the `authCode` in the payload
        // data =>  { authCode : '<value>' }
    }
}).render('#auth-button-container');
```
### ResponseType `id_token`

```javascript
paypal.AuthButton({
    scopes: ['openid', 'profile', 'email', 'address', 'phone'],
    responseType: 'id_token',
    onApprove: data => {
        // this will return the `idToken` and `authCode` in the payload
        // data => { idToken: '<value>', authCode : '<value>' }
    }
}).render('#auth-button-container');
```
