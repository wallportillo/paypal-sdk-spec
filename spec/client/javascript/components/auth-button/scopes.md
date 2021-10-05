### Scopes

The merchant will provide a list of scopes to integrate with the AuthButton.

```javascript
    paypal.AuthButton(
      {
        scopes: ["openid", "profile", "email", "address", "phone"],
        // add rest of your props here
      });
```