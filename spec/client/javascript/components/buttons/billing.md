# Billing Agreements

## SDK Initialization

- Pass [`intent=tokenize`](../../initialization.md#intent)

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
    createBillingAgreement: () => { /* createBillingAgreement logic here */ },
    onApprove: () => { /* onApprove logic here */ }
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
