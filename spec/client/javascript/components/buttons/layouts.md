# Button Layouts

## Vanilla Javascript

### Single, standalone PayPal button

```javascript
paypal.Button({ fundingSource: paypal.FUNDING.PAYPAL })
    .render('#paypal-button-container');
```

### Multiple standalone buttons

```javascript
const paypalButton = paypal.Button({ fundingSource: paypal.FUNDING.PAYPAL });
const venmoButton = paypal.Button({ fundingSource: paypal.FUNDING.VENMO });
const creditButton = paypal.Button({ fundingSource: paypal.FUNDING.CREDIT });

if (paypalButton.isEligible()) {
    paypalButton.render('#paypal-button-container');
}

if (venmoButton.isEligible()) {
    venmoButton.render('#venmo-button-container');
}

if (creditButton.isEligible()) {
    creditButton.render('#credit-button-container');
}
```

### All eligible standalone buttons

```javascript
paypal.getFundingSources().forEach(fundingSource => {
    const button = paypal.Button({ fundingSource });
    if (button.isEligible()) {
        button.render(`#button-container-${fundingSource}`);
    }
});
```

## React

### Single, standalone PayPal button

```javascript
const App = () => {
    return (
        <PayPalButton fundingSource={ FUNDING.PAYPAL } />
    );
}
```

### Multiple standalone buttons

___TBD___

### All eligible standalone buttons

___TBD___
