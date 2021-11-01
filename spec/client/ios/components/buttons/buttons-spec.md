## Payment Button Spec

#### Payment Button Delegate
```swift
// This delegate can be used by the merchant to start the native checkout flow
public protocol PaymentButtonDelegate {
    func paymentButtonTapped()
}
```

#### PayPal Button
```swift
public class PayPalButton: UIButton {
    /// The color of the PayPal button
    public private(set) var color: PayPalButtonColor

    /// The shape of the payment button
    public private(set) var shape: PaymentButtonShape

    /// The size of the payment button
    public private(set) var size: PaymentButtonSize

    /// The label displayed on the button
    public private(set) var buttonText: PayPalButtonLabel?

    weak var delegate: PaymentButtonDelegate?

    public init(
        color: PayPalButtonColor,
        shape: PaymentButtonShape,
        size: PaymentButtonSize,
        buttonText: PayPalButtonLabel? = nil
    )
}  
```

#### PayPal Credit Button
```swift
public class PayPalCreditButton: UIButton {
    /// The color of the PayPal Credit button
    public private(set) var color: PayPalCreditButtonColor

    /// The shape of the payment button
    public private(set) var shape: PaymentButtonShape

    /// The size of the payment button
    public private(set) var size: PaymentButtonSize

    weak var delegate: PaymentButtonDelegate?

    public init(
        color: PayPalCreditButtonColor,
        shape: PaymentButtonShape,
        size: PaymentButtonSize
    )
}
```

#### PayPal Pay Later Button
```swift
public class PayPalPayLaterButton: UIButton {
    /// The color of the PayPal button
    public private(set) var color: PayPalPayLaterButtonColor

    /// The shape of the payment button
    public private(set) var shape: PaymentButtonShape

    /// The size of the payment button
    public private(set) var size: PaymentButtonSize

    weak var delegate: PaymentButtonDelegate?

    public init(
        color: PayPalPayLaterButtonColor,
        shape: PaymentButtonShape,
        size: PaymentButtonSize
    )
}  
```

#### PayPal Color Enum
```swift
// Colors that can be applied to the PayPal Button only
public enum PayPalButtonColor: UIColor {
    case gold
    case blue
    case white
    case black
    case silver
}
```

#### PayPal Credit Color Enum
```swift
// Colors that can be applied to the PayPal Credit Button only
public enum PayPalCreditButtonColor: UIColor {
  case darkBlue
  case black
  case white
}
```

#### PayPal Pay Later Color Enum
```swift
// Colors that can be applied to the PayPal Pay Later Button only
public enum PayPalPayLaterButtonColor: UIColor {
    case gold
    case blue
    case white
    case black
    case silver
}
```

#### Button Shape Enum
```swift
public enum PaymentButtonShape {
    case pill
    case rectangle
    case rounded
}
```

#### Button Size Enum
```swift
public enum PaymentButtonSize {
    case small
    case medium
    case large
}
```

#### PayPal Button Label Enum
```swift
public enum PayPalButtonLabel {
    /// Display "Checkout" on the right side of the button's logo
    case checkout

    /// Display "Buy now" on the right side of the button's logo
    case buyNow

    /// Display "Pay with" on the left side of the button's logo
    case payWith
}
```
