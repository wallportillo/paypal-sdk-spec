# Render Buttons

## Vanilla Javascript

```javascript
paypal.Button()
    .render('#paypal-button-container');
```

## React

```javascript
const App = () => {
    return (
        <PayPalButton />
    );
}
```

## Teardown

```javascript
const buttons = paypal.Button();
buttons.render('#paypal-button-container');
buttons.close();
```
