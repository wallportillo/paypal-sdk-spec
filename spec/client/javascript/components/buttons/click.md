# Click Callback

The onClick callback will be called any time the buyer clicks a button.

See also: [Validation](validation.md)

## Vanilla Javascript

```javascript
paypal.Buttons({
    onClick: (data) => {
        console.log(`The buyer clicked the ${ data.fundingSource } button`);
    }
}).render('#paypal-buttons-container');
```

## React

```javascript
const App = () => {
    const onClick = (data) => {
        console.log(`The buyer clicked the ${ data.fundingSource } button`);
    };

    return (
        <PayPalButtons
            onClick={ onClick }
        />
    );
}
```
