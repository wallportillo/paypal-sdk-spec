### iOS PayPal Integration

If a merchant wants to integrate with the PayPal module, these are the steps they would take.

1. Import `PayPal` at the top of their file
2. Create a `CoreConfig` instance using the client ID and environment
3. Create a `PayPalClient` instance using that configuration and return URL
5. Create an `orderID` via the orders API (SDK not involved in this step)
6. Start the checkout experience using the `orderID` (which would have been retrieved by the merchant outside the SDK)

### iOS PayPal Integration Sample Code

```swift
import PayPal

class PayPalDemoViewController: UIViewController {

    let payPalButton = PayPalButton()

    override func viewDidLoad() {
        super.viewDidLoad()
        payPalButton.addTarget(self, action: #selector(didTapPayPalButton), for: .touchUpInside)
        // add subview and setup constraints
    }

    // MARK: - PayPal Module Integration
    @objc func didTapPayPalButton() {
        checkoutWithPayPal(orderID: "my_order_id")
    }

    func checkoutWithPayPal(orderID: String) {
        let config = CoreConfig(clientID: "client_id", environment: .sandbox)
        let payPalClient = PayPalClient(config: config, returnURL: "return_url")

        payPalClient.start(orderID: orderID, presentingViewController: self) { state in
            switch state {
            case .success(let result):
                // handle success
            case .failure(let error):
                // handle failure
            case .cancellation:
                // handle cancellation
            }
        }
    }
}
```
