# onApprove Auth

Callback used to signal user consent approval from successfully completing the auth button flow.

## Examples

### Use auth tokens to look up additional buyer info using the PayPal APIs

```javascript
const onApprove = (data, actions) => {
    // merchant sends auth tokens to their own api to
    // lookup additional user info using the paypal identity apis
    return fetch('/api/paypal/auth/consent', {
        method: 'POST',
        body: JSON.stringify({
            authCode: data.authCode,
            idToken: data.idToken,
        }),
    }).then((res) => {
        // Show a success message to the user
    });
};

```

## Types

```javascript
type OnApprove = (
    data : OnApproveData,
    actions : OnApproveActions
) => undefined | Promise<undefined>

type OnApproveData = {
    authCode : string,
    idToken? : string
};

type OnApproveActions = {

};
```
