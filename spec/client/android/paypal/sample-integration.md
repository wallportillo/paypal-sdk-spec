### Android PayPal Integration

To use the PayPal module in a merchant application:

1. Add `import com.paypal.android.checkout.PayPalClient` to the application's `build.gradle`
2. Create a `PaymentsConfig` instance using client ID and return url
3. Create a `PayPalClient` instance using `PaymentsConfig`
5. Create an `orderID` via the orders API (SDK not involved in this step)
6. Start the checkout experience using the `orderID` (which would have been retrieved by the merchant outside the SDK)

### PayPal Integration Sample Code

```kotlin
class MerchantActivity {

  val coreConfig = CoreConfig("client_id", environment = Environment.SANDBOX)
  var payPalClient = PayPalClient(application: application, coreConfig: coreConfig, returnUrl: "return_url")

  payPalClient.checkout(orderId: "order_id") { result ->
    when (result) {
      is PayPalResult.Success -> {
        // handle success
      },
      is PayPalResult.Failure -> {
        // handle failure
      },
      is PayPalResult.Cancellation -> {
        // handle cancellation
      }
  }
}
```
