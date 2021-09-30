# Click Callback

The onClick callback will be called any time the buyer clicks a button.

See also: [Validation](validation.md)

## Vanilla Javascript

```javascript
paypal.Button({
    onClick: (data) => {
        console.log(`The buyer clicked the ${ data.fundingSource } button`);
    }
}).render('#paypal-button-container');
```

## React

```javascript
const App = () => {
    const onClick = (data) => {
        console.log(`The buyer clicked the ${ data.fundingSource } button`);
    };

    return (
        <PayPalButton
            onClick={ onClick }
        />
    );
}
```
