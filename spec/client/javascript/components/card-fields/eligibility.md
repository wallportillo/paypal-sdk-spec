# Eligibility

## Detect eligibility

```javascript
const cardFields = paypal.CardFields();

if (cardFields.isEligible()) {
    cardFields.render('#card-field-container')
}
```

## Branded vs Unbranded

Card fields can operate in 'branded' (guest) mode and 'unbranded' (ucc) mode.

### Unbranded

- White-label: merchant controls the UX completely
- Unbranded mode is the default if account is vetted for unbranded transactions

### Branded

- PayPal Branding and terms/conditions required
- Branded mode is the default if account is not vetted for unbranded transactions
- See [Branded Mode](./branded.md)

### Vanilla Javascript

#### Default

```javascript
paypal.CardFields()
    .render('#card-field-container');
```

### Branded Override

```javascript
paypal.CardFields({ branded: true })
    .render('#card-field-container');
```

#### Unbranded Override

```javascript
paypal.CardFields({ branded: false })
    .render('#card-field-container');
```

- If not vetted for unbranded: throw integration error on `.render()` and reject promise.

### React

#### Default

```javascript
const App = () => {
    return (
        <PayPalCardFields />
    );
}
```

#### Branded Override

```javascript
const App = () => {
    return (
        <PayPalCardFields
            branded={ true }
        />
    );
}
```

#### Unbranded Override

```javascript
const App = () => {
    return (
        <PayPalCardFields
            branded={ false }
        />
    );
}
```
  