# Log in with PayPal [AuthButton]
Log in with PayPal (LIPP) button is now integrated via JS SDK to Log in with your paypal account from any partner.

# Render Auth Button

## SDK Initialization
- Pass [`components=auth-button`](../../initialization.md#components)


### Vanilla Javascript

```javascript
paypal.AuthButton()
    .render('#auth-button-container');
```

### React

```javascript
const App = () => {
    return (
        <AuthButton />
    );
}
```
## Teardown

```javascript
const authButton = paypal.AuthButton();
authButton.render('#auth-button-container');
authButton.close();
```