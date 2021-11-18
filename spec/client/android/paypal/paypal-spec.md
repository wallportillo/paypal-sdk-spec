# PayPal Spec

#### Android Interface
```kotlin
class PayPalClient(application: Application, coreConfig: CoreConfig, returnUrl: String) {

    init {
        val config = CheckoutConfig(
            application = application,
            clientId = coreConfig.clientId,
            environment = getPayPalEnvironment(coreConfig.environment),
            returnUrl = returnUrl,
        )
        PayPalCheckout.setConfig(config)
    }

    fun checkout(orderId: String, complete: (PayPalCheckoutResult) -> Unit) {
        PayPalCheckout.start(CreateOrder { createOrderActions ->
            createOrderActions.set(orderId)
        },
            onApprove = OnApprove { approval ->
                complete(PayPalCheckoutResult.Success(approval.data.orderId, approval.data.payerId))
            },
            onCancel = OnCancel {
                complete(PayPalCheckoutResult.Cancellation)
            },
            onError = OnError { errorInfo ->
                complete(PayPalCheckoutResult.Failure(ErrorInfo(errorInfo)))
            })
    }
}
```


### Improvements

- Fetch merchant configuration from a PayPal backend and infer `returnUrl` to reduce the number of parameters needed when constructing a `PayPalUI` instance.


----
