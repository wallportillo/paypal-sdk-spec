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

## Button

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({ onApprove });

cardFields.Button().render('#card-submit-button-container')

cardFields.render('#card-field-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields onApprove={ onApprove }>
            <paypal.Buttons />
        </PayPalCardFields>
    );
}
```

## Manual Submit

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    onApprove
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