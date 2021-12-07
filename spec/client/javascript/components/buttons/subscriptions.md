# Button Subscriptions

## SDK Initialization

- Pass [`intent=subscription`](../../initialization.md#intent)

## Subscription Create and Approval callback

```javascript
const createSubscription = () => {
    // Set up and return subscription id
};

const onApprove = (data, actions) => {
    // Finalize subscription
};
```

See:

- [`createSubscription`](../../callbacks/createSubscription.md)
- [`onApprove`](../../callbacks/onApprove-subscription.md)

## Button

### Vanilla Javascript

```javascript
paypal.Buttons({
    createSubscription: () => { /* createSubscription logic here */ },
    onApprove: () => { /* onApprove logic here */ }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalButtons
            createSubscription={ createSubscription }
            onApprove={ onApprove }
        />
    );
}
```
