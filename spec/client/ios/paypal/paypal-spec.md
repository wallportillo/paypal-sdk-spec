PayPal Spec
---

#### Swift Interface
```swift
public protocol PayPalClientDelegate {
    // Invoked when a transaction is approved by the
    // user and ready for authorization or capture by
    // the merchant
    func paypalDidApprove(client: PayPalClient, data: ApprovalData)

    // Invoked when the checkout experience has been canceled
    func paypalDidCancel(client: PayPalClient)

    // Invoked when the SDK encounters an unrecoverable error
    func paypalDidError(client: PayPalClient, error: PayPalError)

    // Invoked when the user wants to change the shipping or
    // pickup information. Requires merchant response to
    // confirm the new selection
    func paypalShippingChange(client: PayPalClient, ...)
}

public class PayPalClient {
    public weak var delegate: PayPalClientDelegate?

    public init(config: PaymentsConfig) {
        ...
    }

    public func checkout(orderId: String) {

    }

    public func checkout(billingAgreement: String) {

    }
}

let config = PaymentsConfig(clientId: "", returnUrl: "")
let client = PayPalClient(config: config)

client.delegate = self
client.checkout(orderId)
```


#### Kotlin Interface
```kotlin
interface PayPalClientListener {
    fun onPayPalApprove(data: ApprovalData)
    fun onPayPalCancel()
    fun onPayPalError(error: PayPalError)
    fun onPayPalShippingChange(...)
}

class PayPalClient(val config: PaymentsConfig) {

    var listener: PayPalClientListener? = null

    fun checkout(orderId: String) {

    }

    fun checkout(billingAgreement: String) {

    }
}

val config = PaymentsConfig(clientId = "", returnUrl = "")
val client = PayPalClient(config = config)

```


### Improvements

- Fetch merchant configuration from a PayPal backend and infer `returnUrl` to reduce the number of parameters needed when constructing a `PayPalClient`


----
