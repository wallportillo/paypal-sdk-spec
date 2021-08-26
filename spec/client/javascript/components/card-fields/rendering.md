# Render Card Fields

## Single card field

### Vanilla Javascript

```javascript
paypal.CardFields()
    .render('#card-field-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields />
    );
}
```

## Multiple card fields

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields();

cardFields.NumberField().render('#card-number-field-container');
cardFields.CVVField().render('#card-cvv-field-container');
cardFields.ExpiryField().render('#card-expiry-field-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields>
            <div id="card-number-field-container">
                <PayPalCardNumberField />
            </div>
            <div id="card-cvv-field-container">
                <PayPalCardCVVField />
            </div>
            <div id="card-expiry-field-container">
                <PayPalCardExpiryField />
            </div>
        </PayPalCardFields>
    );
}
```

## Teardown

### Single card field

```javascript
const cardFields = paypal.CardFields();
cardFields.render('#card-field-container');

cardFields.destroy();
```

### Multiple card fields

```javascript
const cardFields = paypal.CardFields();

cardFields.NumberField().render('#card-number-field-container');
cardFields.CVVField().render('#card-cvv-field-container');
cardFields.ExpiryField().render('#card-expiry-field-container');

cardFields.destroy();
```