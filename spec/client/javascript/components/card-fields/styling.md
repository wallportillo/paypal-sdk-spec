# Style Card Fields

## Supported Styles

### Properties

- `color`
- `font`
- `font-family`
- `font-size`
- `font-size-adjust`
- `font-stretch`
- `font-style`
- `font-variant`
- `font-variant-alternates`
- `font-variant-caps`
- `font-variant-east-asian`
- `font-variant-ligatures`
- `font-variant-numeric`
- `font-weight`
- `line-height`
- `outline`
- `opacity`
- `text-shadow`
- `transition`

### Selectors

- `:hover`
- `.valid`
- `.invalid`
- `@media`

## Example

```javascript
const cardStyle = {
    'font-size': '16px',
    'font-family': 'courier, monospace',
    'font-weight': 'lighter',
    'color': '#ccc',
    
    ':invalid': {
        'color': 'red',
    }
}

const cardPlaceholders = {
    number: 'XXXX-XXXX-XXXX-XXXX',
    expiry: 'MM/YY',
    cvv:    'CVV'
};
```

## Single card field

### Vanilla Javascript

```javascript
paypal.CardFields({
    style: cardStyle
}).render('#card-field-container');
```

### React

```javascript
const App = () => {    
    return (
        <PayPalCardFields
            placeholders={ cardPlaceholders }
            style={ cardStyle }
        />
    );
}
```

## Multiple card fields

### Vanilla Javascript

#### Universal Style

```javascript
const cardFields = paypal.CardFields({ style: cardStyle });

cardFields.NumberField().render('#card-number-field-container');
cardFields.CVVField().render('#card-cvv-field-container');
cardFields.ExpiryField().render('#card-expiry-field-container');
```

#### Individual Field Overrides

```javascript
const cardFields = paypal.CardFields({ style: cardStyle });

cardFields.NumberField({
    placeholder: cardPlaceholders.number,
    style: cardNumberStyle
}).render('#card-number-field-container');

cardFields.CVVField({
    placeholder: cardPlaceholders.cvv,
    style: cardCVVStyle
}).render('#card-cvv-field-container');

cardFields.ExpiryField({
    placeholder: cardPlaceholders.expiry,
    style: cardExpiryStyle
}).render('#card-expiry-field-container');
```

### React

#### Universal Style

```javascript
const App = () => {
    return (
        <PayPalCardFields style={ cardStyle }>
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

#### Individual Field Overrides

```javascript
const App = () => {
    return (
        <PayPalCardFields style={ cardStyle }>
            <div id="card-number-field-container">
                <PayPalCardNumberField
                    placeholder={ cardPlaceholders.number }
                    style={ cardNumberStyle } />
            </div>
            <div id="card-cvv-field-container">
                <PayPalCardCVVField
                    placeholder={ cardPlaceholders.cvv }
                    style={ cardCVVStyle } />
            </div>
            <div id="card-expiry-field-container">
                <PayPalCardExpiryField
                    placeholder={ cardPlaceholders.expiry }
                    style={ cardExpiryStyle } />
            </div>
        </PayPalCardFields>
    );
}
```