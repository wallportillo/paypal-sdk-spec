# Submit card fields

## Button

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields();

cardFields.Button().render('#card-submit-button-container')

cardFields.render('#card-field-container');
```

### React

```javascript
const App = () => {
    return (
        <PayPalCardFields>
            <paypal.Buttons />
        </PayPalCardFields>
    );
}
```

## Manual Submit

### Vanilla Javascript

```javascript
const cardFields = paypal.CardFields();
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
        <PayPalCardFields ref={ cardFieldRef }>
            <button onClick={ submitCard }>
                Submit
            </button>
        </PayPalCardFields>
    );
}
```