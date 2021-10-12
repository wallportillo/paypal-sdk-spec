# authorization tokens

Callback used to signal user consent approval from successfully completing the auth button flow.

## Examples

### Get authorization tokens from paypal

```javascript
const onApprove = (data, actions) => {
    // merchant sends auth tokens to their own api to
    // lookup additional user info using the paypal identity apis
    return fetch('/api/paypal/auth/consent', {
        method: 'POST',
        body: JSON.stringify({
            authCode: data.authCode,
            idToken: data.idToken
        })
    }).then(res => {
        // Show a success message to the user
    });
};
```
### Capture cancel consent code from paypal

```javascript
const onCancel = (data) => {
    // this value have the cancel code when the user cancel the consent.
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