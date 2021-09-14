### iOS PayPal Integration

If a merchant wants to integrate with the PayPal module, these are the steps they would take.

1. Import `PayPalPayments` at the top of their file
2. Create a `PaymentsConfig` instance using their client Id and return Url
3. Create a `PayPalUI` instance using that configuration
4. Set the delegate of the `PayPalUI` to an object that should receive messages from the SDK, and handle the events (approval, cancellation, errors, and shipping updates)
5. Create an `orderId` by making a request to the orders API directly (SDK not involved in this step)
6. Start the checkout experience using an `orderId` (which would have been retrieved by the merchant outside the SDK)

### Sample Code Integration

```swift
// 1
import PayPalPayments

class MerchantViewController: UIViewController, PayPalClientDelegate {
  // 2
  let config = PaymentsConfig(clientId: "abc", returnUrl: "abc://paypalpay")

  // 3
  lazy var paypal: PayPalUI = {
    let instance = PayPalUI(config: config)

    // 4
    instance.delegate = self
    return instance
  }()

  // Merchant Created UI
  @IBOutlet weak var paypalButton: UIButton!

  @IBAction
  func paypalButtonTapped(_ sender: Any) {
    // 5
    NetworkClient.createOrderId(details: <currentOrderDetails>) { result in
      guard result == .success(let orderId) else {
          return
      }

      self.startPayPalCheckout(orderId: orderId)
    }
  }

  func startPayPalCheckout(orderId: String) {
    // 6
    paypal.checkout(orderId: orderId)
  }

  // PayPalUIDelegate Conformance
  func paypal(_ paypal: PayPalUI, didApproveWith data: ApprovalData) {
    let orderId = data.orderId
    // Merchant can capture / authorize their order using the orders API
  }

  func paypal(_ paypal: PayPalUI, didReceiveError error: PayPalError) {
    // PayPalCheckout encountered an unrecoverable error
  }

  func paypal(_ paypal: PayPalUI, didChangeShippingAddress shippingAddress: ShippingAddress) {
    // End user is updating their shipping info within the checkout flow
  }

  func paypalDidCancel(_ paypal: PayPalUI) {
    // PayPal checkout flow was canceled
  }
}
```
