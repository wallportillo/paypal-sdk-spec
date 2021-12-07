# Button Purchases

## SDK Initialization

- Pass [`intent`](../../initialization.md#intent)
  - [`intent=capture`](../../initialization.md#intent): immediate capture
  - [`intent=authorize`](../../initialization.md#intent): auth/capture

## Order Create and Approval callback

```javascript
const createOrder = () => {
    // Set up and return order
};

const onApprove = (data, actions) => {
    // Finalize order (capture or authorize)
};
```

See:

- [`createOrder`](../../callbacks/createOrder.md)
- [`onApprove`](../../callbacks/onApprove-order.md)

## Button

### Vanilla Javascript

```javascript
paypal.Buttons({
    createOrder: () => { /* createOrder logic here */ },
    onApprove: () => { /* onApprove logic here */ }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalButtons
            createOrder={ createOrder }
            onApprove={ onApprove }
        />
    );
}
```
