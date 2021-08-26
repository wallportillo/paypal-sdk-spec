# Transactional case

## SDK Initialization

- Pass [`intent`](../../initialization.md#intent)
  - [`intent=capture`](../../initialization.md#intent): immediate capture
  - [`intent=authorize`](../../initialization.md#intent): auth/capture

## Order Create and Approval callback

```javascript
const createOrder = () => {
    // Set up and return order
};

const onApprove = (data, actions) => {
    // Finalize order (capture or authorize)
};
```

See:

- [`createOrder`](../../callbacks/createOrder.md)
- [`onApprove`](../../callbacks/onApprove.md)

## Button

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({ createOrder, onApprove });

cardFields.Button().render('#card-submit-button-container')
cardFields.render('#card-field-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields createOrder={ createOrder } onApprove={ onApprove }>
            <paypal.Buttons />
        </PayPalCardFields>
    );
}
```

## Manual Submit

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields({
    createOrder,
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
            ref={ cardFieldRef }
            createOrder={ createOrder }
            onApprove={ onApprove }
        >
            <button onClick={ submitCard }>
                Submit
            </button>
        </PayPalCardFields>
    );
}
```