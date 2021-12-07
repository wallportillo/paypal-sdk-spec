# Button Tokenization and vaulting

## SDK Initialization

- Pass [`intent=tokenize`](../../initialization.md#intent)
- Pass [`data-user-id-token`](../../initialization.md#data-user-id-token)
  - ID Token must contain a `customer_id` field to identify the customer to save the tokenized instrument under.

## Approval Callback

```javascript
const onApprove = (data) => {
    console.log('Tokenized instrument:', data.paymentMethodToken)
};
```

See:

- [`onApprove`](../../callbacks/onApprove-tokenize.md)

## Button

### Vanilla Javascript

```javascript
paypal.Buttons({
    onApprove: () => { /* onApprove logic here */ }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalButtons
            onApprove={ onApprove }
        />
    );
}
```
