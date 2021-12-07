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
    paymentMethodToken: paymentMethodToken,
    createOrder: () => { /* createOrder logic here */ },
    onApprove: () => { /* onApprove logic here */ }
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
                <PayPalCardFields.CVVField />
            </div>

            <PayPalCardFields.Button />
        </PayPalCardFields>
    );
}
```

### Manual Submit

#### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    paymentMethodToken: paymentMethodToken,
    createOrder: () => { /* createOrder logic here */ },
    onApprove: () => { /* onApprove logic here */ }
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
                <PayPalCardFields.CVVField />
            </div>

            <button onClick={ submitCard }>
                Submit
            </button>
        </PayPalCardFields>
    );
}
```