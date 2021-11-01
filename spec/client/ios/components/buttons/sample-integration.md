## Step-by-step button integration

### Basic button integration

```swift
class PayPalViewController: UIViewController, PaymentButtonDelegate {

  let payPalButton = PayPalButton(
      color: .gold,
      shape: .rounded,
      size: .medium,
      buttonText: .checkout
  )

  let payPalCreditButton = PayPalCreditButton(
    color: .darkBlue,
    shape: .rounded,
    size: .medium
  )

  let payLaterButton = PayPalPayLaterButton(
    color: .silver,
    shape: .rounded,
    size: .medium
  )

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .white

        view.addSubview(payPalButton)
        view.addSubview(payPalCreditButton)
        view.addSubview(payLaterButton)

        NSLayoutConstraint.activate([
          // setup button constraints  
        ])
    }

    func paymentButtonTapped() {
      // launch PayPal / PayPal Credit / Pay Later flow        
    }
}
```
