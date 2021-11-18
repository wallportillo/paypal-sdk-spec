# Init Callback

The onInit callback will be called when the buttons are successfully rendered.

See also: [Validation](validation.md)

## Vanilla Javascript

```javascript
paypal.Buttons({
    onInit: (data) => {
        // The button was rendered
    }
}).render('#paypal-buttons-container');
```

## React

```javascript
const App = () => {
    const onInit = (data) => {
        // The button was rendered
    };

    return (
        <PayPalButtons
            onInit={ onInit }
        />
    );
}
```
