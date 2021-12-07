# Tokenization and vaulting

## SDK Initialization

- Pass [`intent=tokenize`](../../initialization.md#intent)
- Pass [`data-user-id-token`](../../initialization.md#data-user-id-token)
  - ID Token must contain a `customer_id` field to identify the customer to save the tokenized card under.

## Approval Callback

```javascript
const onApprove = (data) => {
    console.log('Tokenized card:', data.paymentMethodToken)
};
```

See:

- [`onApprove`](../../callbacks/onApprove-tokenize.md)

## Button

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    onApprove: () => { /* onApprove logic here */ }
});
const button = cardFields.Button();

cardFields.render('#card-field-container');
button.render('#card-submit-button-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields onApprove={ onApprove }>
            <PayPalCardFields.Button />
        </PayPalCardFields>
    );
}
```

## Manual Submit

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    onApprove: () => { /* onApprove logic here */ }
});

cardFields.render('#card-field-container');

document.querySelector('#card-submit-button')
    ?.addEventListener('click', cardFields.submit);
```

### React

```javascript
const App = () => {
    const cardFieldRef = useRef();
    
    const submitCard = () => {
        cardFieldRef.current.submit();
    };

    return (
        <PayPalCardFields
            onApprove={ onApprove }
            ref={ cardFieldRef }>

            <button onClick={ submitCard }>
                Submit
            </button>
        </PayPalCardFields>
    );
}
```