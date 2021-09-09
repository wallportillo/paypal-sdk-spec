# Repeat Payments

## Basic Repeat Payments

___TODO__: Link to button doc for returning users

## Repeat payments with CVV

Collect the CVV field and make a repeat purchase using an existing tokenized card

### Payment method token

```javascript
const paymentMethodToken = 'xyz';
```

### Button

#### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    paymentMethodToken,
    createOrder,
    onApprove
});

cardFields.CVVField().render('#card-cvv-field-container')
cardFields.Button().render('#card-submit-button-container')
```

#### React

```javascript
const App = () => {
    return (
        <PayPalCardFields
            paymentMethodToken={ paymentMethodToken }
            createOrder={ createOrder }
            onApprove={ onApprove }>

            <div id="paypal-card-cvv-field-container">
                <PayPalCardCVVField />
            </div>

            <paypal.Buttons />
        </PayPalCardFields>
    );
}
```

### Manual Submit

#### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    paymentMethodToken,
    createOrder,
    onApprove
});

cardFields.render('#card-field-container');

document.querySelector('#card-submit-button')
    ?.addEventListener('click', cardFields.submit);
```

#### React

```javascript
const App = () => {
    const cardFieldRef = useRef();
    
    const submitCard = () => {
        cardFieldRef.current.submit();
    };

    return (
        <PayPalCardFields
            ref={ cardFieldRef }
            paymentMethodToken={ paymentMethodToken }
            createOrder={ createOrder }
            onApprove={ onApprove }>

            <div id="paypal-card-cvv-field-container">
                <PayPalCardCVVField />
            </div>

            <button onClick={ submitCard }>
                Submit
            </button>
        </PayPalCardFields>
    );
}
```