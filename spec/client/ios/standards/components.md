# Components (iOS)

## Types

- UX Components
  - Visual and interactive
  - e.g. Buttons, Card Fields
- Data Functions
  - Accept data, do something, return data
      - We vend results using the Result type when possible
  - No associated UX
  - e.g. API wrapper functions
- Constants/Enums
  - Logical grouping of values
  - e.g. country codes, order status
- Callbacks vs Delegates
    - onApprove/onError/onCancel will be passed back to merchants as `<Feature>Result` enum with success/failure/cancellation inside a single callback (completion block).
    - Other optional callbacks (ie onShippingChange) will be optional delegate

## UX Components

- Drop-in Components
  * Lowest integration effort
  * Offers merchants a feature complete low-code integration

- Standalone UX Components
  * Medium integration effort
  * Merchants will use the UX components alongside our feature clients. ex: use a payment button component to launch the paypal flow via the feature client
  * Offers merchants a greater degree of customization
  * Programmatic elements (not XIB/NIB)
  * Pass in styles where applicable (color, shape, etc)
      * Our documentation will outline the following convention for passing in these options: `let uxComponent = SomeUXComponent(color: shape: etc.)`

- Feature Clients
  * Highest integration effort
  * Offers merchants a fully customizable headless integration

### Examples

#### Drop-in UX Component Example

```swift
import PayPalDropIn

func showDropIn(clientID: "client_id_here") {
    let request =  PayPalDropInRequest()
    let dropIn = PayPalDropInController(clientID: clientID, request: request)
    {
      ...
    }
    self.present(dropIn, animated: true)
}
```

#### Standalone UX Component Example

```swift
import PayPal
import PaymentsCore

  let config = CoreConfig(clientID: "client_id_here", environment: .sandbox)

  let payPalButton = PayPalButton()

  override func viewDidLoad() {
    super.viewDidLoad()

    payPalButton.addTarget(self, action: #selector(didTapPayPalButton), , for: .touchUpInside)
        view.addSubview(payPalButton)

    NSLayoutConstraint.activate([
        payPalButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        payPalButton.centerYAnchor.constraint(equalTo: view.centerYAnchor)
    ])    
  }

  @objc func didTapPayPalButton() {
    checkoutWithPayPal(orderID: orderID)
  }

  func checkoutWithPayPal(orderID: String) {
    let payPalClient = PayPalClient(config: config, returnURL: "")
    payPalClient.start(orderID: orderID, presentingViewController: self) { [weak self] state in
      switch state {
      case .success(let result):
        // handle success
      case .failure(let error):
        // handle failure
      case .cancellation: // this state only needed when users can opt out of the experience
        // handle cancellation
      }
    }
  }
```

#### Feature Client Example

```swift
private func setupPayPalFeatureClient() {
  let config = CoreConfig(clientID: "client_id_here", environment: .sandbox)
  let payPalClient = PayPalClient(config: config, returnURL: "")

  // it's up to merchant to instantiate request data
  val payPalRequest = PayPalRequest(PayPalData())

  // If the client is responsible of launching a UX flow (ex: PayPal, Venmo) we will
  // use function names such as `start`. In cases where we are wrapping a network request
  // we will use function names that represent the action such as `approveOrder`.
  payPalClient.start/approveOrder(payPalRequest) { [weak self] state in
      switch state {
      case .success(let result):
        // handle success
      case .failure(let error):
        // handle failure
      case .cancellation: // this state only needed when users can opt out of the experience
        // handle cancellation
      }
  }
}
```
