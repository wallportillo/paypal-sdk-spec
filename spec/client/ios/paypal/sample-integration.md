### iOS PayPal Integration

If a merchant wants to integrate with the PayPal module, these are the steps they would take.

1. Import `PayPalPayments` at the top of their file
2. Create a `PaymentsConfig` object using their client Id and return Url
3. Create a `PayPalClient` object using that configuration
4. Set the delegate of the `PayPalClient` to an object that should receive messages from the SDK, and handle the events (approval, cancellation, errors, and shipping updates)
5. Start the checkout experience using an `orderId` (which would have been retrieved by the merchant outside the SDK)
