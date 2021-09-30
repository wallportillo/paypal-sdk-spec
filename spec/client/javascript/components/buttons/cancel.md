# Cancel Callback

The onCancel callback will be called any time the buyer explicitly decides to cancel a checkout flow, e.g.

- Clicking on a link to return to the merchant page
- Closing a window
- Hitting the back button

## Vanilla Javascript

```javascript
paypal.Button({
    onCancel: () => {
        // Take the buyer to a cancel page
    }
}).render('#paypal-button-container');
```

## React

```javascript
const App = () => {
    const onCancel = () => {
        // Take the buyer to a cancel page
    };

    return (
        <PayPalButton
            onCancel={ onCancel }
        />
    );
}
```
