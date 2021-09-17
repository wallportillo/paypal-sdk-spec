# Returning User

Pass in the user's identity to allow the user to skip-login and/or get a one-click experience, for supported buttons.

## SDK Initialization

- Pass [`data-user-id-token`](../../initialization.md#data-user-id-token)
  - The ID Token must contain a `customer_id` field to identify the customer's vault
  - Or the ID Token must directly represent a PayPal/Venmo buyer (e.g. based on an existing billing-agreement or refresh-token)

By default, if the customer has any vaulted FIs, the buttons will allow the user to pay with their default vaulted FI

## Specific vaulted instruments

To allow the buyer to pay or skip-login with a specific vaulted instrument, pass the `paymentMethodToken` for that instrument into the button:

```javascript
paypal.Buttons({
    fundingSource: paypal.FUNDING.PAYPAL,
    paymentMethodToken: 'xyz123'
}).render('#paypal-button-container')
```
