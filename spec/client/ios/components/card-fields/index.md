# iOS Card Field Spec

### Initialization

In order to create a contract around our card field UI, they would first create a client object, and pass that client object to a UI components type.

```swift=
/// Contains the shared data the SDK would need for each payment method
/// in order to function properly
public struct CoreConfig {
    let clientId: String
    let currency: Currency ( enum )
    let locale: ?
    
    others? 
}
```

Using a shared configuration object, a new instance of a `CardClient` can be created

```swift=
public class CardClient {
    
    public init(config: CoreConfig) {
        ...
    }

    public func capture(order: OrderRequest, 
                        completion: (Result<CaptureResponse, CaptureError>) -> Void) {
        // Capture with order object
    }
    
    
    public func capture(orderID: String, 
                        completion: (Result<CaptureResponse, CaptureError>) -> Void) { 
        // Capture with order ID
    }
}
```

### UI Types

We want to provide some discrete types that a merchant could use to check out, but want to be flexible enough that a merchant could pass any object conforming to some interface
```swift= 
public protocol: CardField {
    // used to ensure we are validating on the right fields
    var component: .cardNumber / .cvv / .expiry { get }
    
    // literal text of the field
    var text: String? { get }
    
    // called when the API request validating the text field resolves
    func validationStatusChanged( .passed / .failed )
} 
```

Our internal implementations would conform to the same protocol

```swift= 
@IBDesignable
public class CardNumberField: UITextField, CardField { 
    public var component = .cardNumber

    public init(font: UIFont = <some default font>, 
                textColor: UIColor = <some default text color>) { 
        ...
    }
    
    public func validationStatusChanged( .passed / .failed ) { 
        /// Update UI if failed validation?
    }
}

public class CardCVVField: UITextField, CardField {  ...  }
public class CardExpiryField: UITextField, CardField {   ...  }
```

# Mobile Card Field UI Spec
Per the [multi-child component conversation](https://github.com/paypal/paypal-sdk-spec/discussions/11), this is a possible implementation of the second solution:

```swift= 
public class CardFieldComponent { 
    public internal(set) fields: [CardField]
    
    public init(cardClient: CardClient, 
                createOrder: { },
                onError: { },
                onApprove: { }) { 
        ... 
    }
    
    public func add(fields: CardField...) { ... }
    
    public func submit() { ... }
}
```
Using this approach, the initial validation (before a validation API request is made) would ensure that the component object has all of the field types that are required before performing the capture request.

### Merchant Integration Steps

The following is a possible merchant integration, where all of the fields and values are implemented in a merchant's view controller
```swift=
import PayPalCard

class SomeMerchantViewController: UIViewController {
    
    let cardNumberField = CardNumberField() 
    let cvvField = CardCVVField()
    let expiryField = CardExpiryField()  
    
    let coreConfig = CoreConfig(clientId:"11222333", currency: .usd, ?)
    
    lazy var cardClient: CardClient = CardClient(config: coreConfig)    
    
    lazy var cardFieldComponent: CardFieldComponent = {
      return CardFieldComponent(
          cardClient: cardClient,
          createOrder: { actions in 
              actions.create(request: OrderRequest())
              //or
              actions.create(orderId: "123")
          },
          onApprove: { approvalData in 
              ...
          },
          onError: { error in 
              ... 
          }
      )
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad() 
        setupCardUI()
    }

    func setupCardUI() {
        view.addSubview(cardNumberField)
        view.addSubview(cvvField)
        view.addSubview(expiryField)

        NSLayoutConstraint.activate([
            <assign UI constraints for each of their card fields>
        ])
        
        cardFieldComponent.add(cardNumberField, cvvField, expiryField)
    }
    
    func submitButtonTapped() {
        cardFieldComponent.submit()
    }
}
```


### Open Questions: 

1. Closures vs Delegates: 
    - The above is implemented using approve / error / create closures. 1:1 communication between objects on iOS is often faciliatated using the delegation pattern. Do we want to continue using closures for the sake of continuity with other platforms, or would we want to migrate to using delegates for the familiarity on iOS? 
    
2. Who controls the communication defined by the closure / delegates:
    - The above implementation assumes the CardFieldComponent would consume the approve / create / error callbacks. Is that the right object to handle that, or should the callbacks / delegate be moved to the CardClient instead?

3. Is the above implementation sufficiently easy to use / intuitive for a merchant? 

