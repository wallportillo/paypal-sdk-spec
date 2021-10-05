
## ResponseType Prop

The `responseType` prop expects one of two possible values (`code`,`id_token`) which determines the output for onApprove callback function.

- [onApprove](../../callbacks/onApprove-consent.md)

### ResponseType `code`

```javascript

    paypal.AuthButton(
            {
            scopes: ["openid", "profile", "email", "address", "phone"],
            responseType: 'code',   
                style : {
                color : 'blue',
                height: 35,
                label: 'login',
                shape: 'pill'
            },
            onApprove: data => {
                // this will return the id token in the payload
                // data =>  { authCode : "<value>" }
            },
            onCancel : function(data){
                // console.log(data)    
            }
            }
    ).render('#button-container');
```
### ResponseType `id_token`

```javascript
    // responseType 'id_token' use case
    paypal.AuthButton(
            {
            scopes: ["openid", "profile", "email", "address", "phone"],
            responseType: 'id_token',   
                style : {
                color : 'blue',
                height: 35,
                label: 'login',
                shape: 'pill'
            },
            onApprove: data => {
                // this will return the id token in the payload
                // data => { idToken: "<value>", authCode : "<value>" }
            },
            onCancel : function(data){
                // console.log(data)    
            }
            }
    ).render('#button-container');
```