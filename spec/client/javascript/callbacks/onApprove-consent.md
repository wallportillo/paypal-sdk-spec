# On Approve Consent

Callback used to signal partner once user accept the consent

- Successfully return auth_code and id_token

## Examples

### Get auth_code/id_token from paypal

```javascript
const onApprove = (data) => {
    return data; 
        // Data is an object which have two values either will be auth_code or id_token
        // this return value depends on reponseType parameter 
    });
}
```

### Capture cancel consent code from paypal

```javascript
const onCancel = (data) => {
    return data
    // this value have the cancel code when the user cancel the consent.
}
```