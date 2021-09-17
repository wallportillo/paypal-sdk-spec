# Billing Agreements

## SDK Initialization

- Pass [`intent=tokenize`](../../initialization.md#intent)
- Pass [`data-user-id-token`](../../initialization.md#data-user-id-token)
  - ID Token must contain a `customer_id` field to identify the customer to save the tokenized card under.

## Billing Agreement Create and Approval Callback

```javascript
const createBillingAgreement = () => {
    // Set up and return billing agreement token
};

const onApprove = (data) => {
    // Send data.billingToken to your server
};
```

See:

- [`createBillingAgreement`](../../callbacks/createBillingAgreement.md)
- [`onApprove`](../../callbacks/onApprove-billing.md)

## Button

### Vanilla Javascript

```javascript
paypal.Buttons({
    createBillingAgreement,
    onApprove
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalButtons
            createBillingAgreement={ createBillingAgreement }
            onApprove={ onApprove }
        />
    );
}
```
