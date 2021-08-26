# Validation

## Single card field

### Vanilla Javascript

```javascript
paypal.CardFields({
    onChange: (data) => {
        cardFieldContainer.className = data.valid ? 'valid' : 'invalid';
    }
}).render(cardFieldContainer);
```

### React

```javascript
const App = () => {
    const [ valid, setValid ] = useState();

    const onChange = (data) => {
        setValid(data.valid);
    };

    return (
        <div class="card-field-container" className={ valid ? 'valid' : 'invalid' }>
            <PayPalCardFields onChange={ onChange } />
        </div>
    );
}
```

## Multiple card fields

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields();

cardFields.NumberField({
    onChange: (data) => {
        cardNumberContainer.className = data.valid ? 'valid' : 'invalid';
    }
}).render(cardNumberContainer);

cardFields.CVVField({
    onChange: (data) => {
        cardCVVContainer.className = data.valid ? 'valid' : 'invalid';
    }
}).render(cardCVVContainer);

cardFields.ExpiryField({
    onChange: (data) => {
        cardExpiryContainer.className = data.valid ? 'valid' : 'invalid';
    }
}).render(cardExpiryContainer);
```

### React

```javascript
const App = () => {
    const [ numberValid, setNumberValid ] = useState();
    const [ cvvValid, setCVVValid ] = useState();
    const [ expiryValid, setExpiryValid ] = useState();

    const onChangeNumber = (data) => {
        setNumberValid(data.valid);
    };

    const onChangeCVV = (data) => {
        setCVVValid(data.valid);
    };

    const onChangeExpiry = (data) => {
        setExpiryValid(data.valid);
    };

    return (
        <PayPalCardFields>
            <div id="card-number-field-container" className={ numberValid ? 'valid' : 'invalid' }>
                <PayPalCardNumberField onChange={ onChangeNumber } />
            </div>
            <div id="card-cvv-field-container" className={ cvvValid ? 'valid' : 'invalid' }>
                <PayPalCardCVVField onChange={ onChangeCVV } />
            </div>
            <div id="card-expiry-field-container" className={ expiryValid ? 'valid' : 'invalid' }>
                <PayPalCardExpiryField onChange={ onChangeExpiry } />
            </div>
        </PayPalCardFields>
    );
}
```

## See also

- [Styling](./styling.md#style-card-fields)