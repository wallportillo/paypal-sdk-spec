# Render AuthButton

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
