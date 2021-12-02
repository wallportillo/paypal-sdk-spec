### Android PayPal Integration

To use the PayPal module in a merchant application:

1. Add `import com.paypal.android.checkout.PayPalClient` to the application's `build.gradle`
2. Create a `PaymentsConfig` instance using client ID and return url
3. Create a `PayPalClient` instance using `PaymentsConfig`
5. Create an `orderID` via the orders API (SDK not involved in this step)
6. Start the checkout experience using the `orderID` (which would have been retrieved by the merchant outside the SDK)

### PayPal Integration Sample Code

```kotlin
class MerchantActivity : AppCompatActivity() {

    private val coreConfig = CoreConfig(
        clientId = "client_id",
        environment = Environment.SANDBOX
    )

    private val payPalClient = PayPalClient(
        application = application,
        coreConfig = coreConfig,
        returnUrl = "return_url"
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        ...

        findViewById<Button>(R.id.paypal_button).setOnClickListener {
            startPayPalCheckout()
        }
    }

    private fun startPayPalCheckout() {
        payPalClient.checkout(orderId = "order_id") { result ->
            when (result) {
                is PayPalResult.Success -> {
                    // handle success
                }
                is PayPalResult.Failure -> {
                    // handle failure
                }
                is PayPalResult.Cancellation -> {
                    // handle cancellation
                }
            }
        }
    }
}
```
