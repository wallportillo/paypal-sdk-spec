# Render Buttons

## Vanilla Javascript

```javascript
paypal.Buttons()
    .render('#paypal-buttons-container');
```

## React

```javascript
const App = () => {
    return (
        <PayPalButtons />
    );
}
```

## Teardown

```javascript
const buttons = paypal.Buttons();
buttons.render('#paypal-buttons-container');
buttons.close();
```
