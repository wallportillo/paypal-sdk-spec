## Step-by-step button integration

### Basic button integration

```swift
class PayPalViewController: UIViewController {

  // defaults to gold color, rounded shape, medium size
  let payPalButton = PayPalButton()

  // OR

  // can pass in customizations
  let payPalButton = PayPalButton(
      color: .black,
      shape: .pill,
      size: .large,
      buttonText: .checkout
  )

  // defaults to dark blue color, rounded shape, medium size
  let payPalCreditButton = PayPalCreditButton()

  // OR

  // can pass in customizations
  let payPalCreditButton = PayPalCreditButton(
    color: .white,
    shape: .pill,
    size: .large
  )

  // defaults to gold color, rounded shape, medium size
  let payLaterButton = PayPalPayLaterButton()

  // OR

  // can pass in customizations
  let payLaterButton = PayPalPayLaterButton(
    color: .silver,
    shape: .rectangle,
    size: .large
  )

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .white

        view.addSubview(payPalButton)
        view.addSubview(payPalCreditButton)
        view.addSubview(payLaterButton)

        payPalButton.addTarget(self, action: #selector(paymentButtonTapped), for: .touchUpInside)
        payPalCreditButton.addTarget(self, action: #selector(paymentButtonTapped), for: .touchUpInside)
        payLaterButton.addTarget(self, action: #selector(paymentButtonTapped), for: .touchUpInside)

        NSLayoutConstraint.activate([
          // setup button constraints  
        ])
    }

    func paymentButtonTapped() {
      // launch PayPal / PayPal Credit / Pay Later flow        
    }
}
```
