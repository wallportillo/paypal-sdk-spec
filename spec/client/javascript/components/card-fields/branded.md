# Branded mode

Branded mode allows using the cards in a basic "branded" mode without additional vetting.

See [Eligibility]('./eligibility.md')

## Rendering

### Single card field

Nothing additional is required for single-field mode

### Multiple card fields

For branded mode, rendering the fields requires one additional `CardMetaDataField` component. This is used:

- To show 'Powered by PayPal' branding
- To show terms and conditions
- To display a consent checkbox when required

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields();

cardFields.NumberField().render('#card-number-field-container');
cardFields.CVVField().render('#card-cvv-field-container');
cardFields.ExpiryField().render('#card-expiry-field-container');
cardFields.MetaDataField().render('#card-metadata-field-container');
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
            <div id="card-metadata-field-container">
                <PayPalCardMetaDataField />
            </div>
        </PayPalCardFields>
    );
}
```
