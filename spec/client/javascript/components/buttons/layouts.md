# Button Layouts

## Standalone

Standalone allows rendering a single button at a time. This gives the most flexibility to the merchant to arrange the buttons in any layout.

### Vanilla Javascript

#### Single, standalone PayPal button

```javascript
paypal.Buttons({ fundingSource: paypal.FUNDING.PAYPAL })
    .render('#paypal-button-container');
```

#### Multiple standalone buttons

```javascript
const paypalButton = paypal.Buttons({ fundingSource: paypal.FUNDING.PAYPAL });
const venmoButton = paypal.Buttons({ fundingSource: paypal.FUNDING.VENMO });
const creditButton = paypal.Buttons({ fundingSource: paypal.FUNDING.CREDIT });

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

#### All eligible standalone buttons

```javascript
paypal.getFundingSources().forEach(fundingSource => {
    const button = paypal.Buttons({ fundingSource });
    if (button.isEligible()) {
        button.render('#buttons-container');
    }
});
```

### React

#### Single, standalone PayPal button

```javascript
const App = () => {
    return (
        <PayPalButtons fundingSource={ FUNDING.PAYPAL } />
    );
}
```

#### Multiple standalone buttons

___TBD___

#### All eligible standalone buttons

___TBD___

## Horizontal

Horizontal button layout renders either:

- Just the PayPal button, if it is the only eligible button
- The PayPal button and another secondary button, if others are eligible. Which secondary button is rendered is determined automatically by the PayPal SDK.

### Vanilla Javascript

```javascript
paypal.Buttons({
    style: {
        layout: 'horizontal'
    }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    const style = {
        layout: 'horizontal'
    };

    return (
        <PayPalButtons style={ style } />
    );
}
```

## Vertical

Horizontal button layout renders either:

- Just the PayPal button, if it is the only eligible button
- The PayPal button and other secondary buttons, if others are eligible. Which secondary buttons are rendered is determined automatically by the PayPal SDK.

### Vanilla Javascript

```javascript
paypal.Buttons({
    style: {
        layout: 'vertical'
    }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    const style = {
        layout: 'vertical'
    };

    return (
        <PayPalButtons style={ style } />
    );
}
```