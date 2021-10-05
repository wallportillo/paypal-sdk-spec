# Log in with PayPal [AuthButton]
    Log in with PayPal button is now integrated via JS SDK to Log in with your paypal account from any partner.
    (Note: this includes the standalone LIPP PayPal button

```javascript
    paypal.Buttons({
        style: {
            height: 30
        }
    }).render('#paypal-buttons-container');
``` 
[Layouts](./layouts.md))

## SDK Initialization
    query params : 
    1. client-id (mandatory)
    2. component (mandatory)
    3. locale (optional)
    - url `<script src="https://www.paypal.com/sdk/js?client-id=AWgTAO4QT9psJNA0JC3hPceKj6cwsKhtUjXWR_eBgWya0OyPIgnwUCB96UGDZ6AGggYCO29HfjVTYbY5&components=auth-button"></script> `
    - Pass [`components=auth-button`](../../callbacks/onApprove-consent.md)

## Login with PayPal with Approval and Cancel Callback

```javascript

const onApprove = (data) => {
    // once user clicks on accept in connect , connect  send accept consent to PayPal and returns the authcode
    // pass id_token & authCode back to partner, it is safe to share that data without clientId & secret they cannot exchange code => token
    
};
const onCancel = (data) => {
    // Send decliend consent back to the merchant
    
};
```

See:

- See [`onApprove`](./data.md)
- See [`onCancel`](./data.md)


## Button
    The following parameters are mandatory for the auth button:
    1. scope[ partner should provide according to the account set up]
    2. responsetype [what type od response they need code /id_token, code + id_token]

    1. User can customize the button according ot their need by providing stlye
    2. We have 4 different labels to support
        1. Log in with PayPal
        2. Connect with PayPal
        3. Continue with PayPal
        4. Sign up with PayPal

## container
<div id="button-container'"></div>    

## Style
See [style](./style.md)

## Based on client itegration with PayPal response type differ

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
                // data = { idToken: "<value>" } , { auth_code : "<value>"}
            },
            onCancel : function(data){
                // console.log(data)    
            }
            }
    ).render('#button-container');
```

```javascript
// responseType 'code' use case

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
                // data =  { auth_code : "<value>"}
            },
            onCancel : function(data){
                // console.log(data)    
            }
            }
    ).render('#button-container');
```

### React

```javascript
    const App = () => {
        return (
            <AuthButton
                onCancel={ onCancel }
                onApprove={ onApprove }
            />
        );
    }
```
