# PayPal Spec

#### iOS Interface
```swift
protocol CheckoutProtocol {
    typealias CreateOrderCallback = (PayPalCreateOrder) -> Void
    typealias ApprovalCallback = (PayPalCheckoutApprovalData) -> Void
    typealias CancelCallback = () -> Void
    typealias ErrorCallback = (PayPalCheckoutErrorInfo) -> Void

    static func set(config: CoreConfig, returnURL: String)

    static func start(
        presentingViewController: UIViewController?,
        createOrder: CreateOrderCallback?,
        onApprove: ApprovalCallback?,
        onCancel: CancelCallback?,
        onError: ErrorCallback?
    )
}

public class PayPalClient {

    private let config: CoreConfig
    private let returnURL: String

    public init(config: CoreConfig, returnURL: String) {
        self.config = config
        self.returnURL = returnURL
        self.CheckoutFlow = Checkout.self
    }

    init(config: CoreConfig, returnURL: String, checkoutFlow: CheckoutProtocol.Type) {
        self.config = config
        self.returnURL = returnURL
        self.CheckoutFlow = checkoutFlow
    }

    public func start(
        orderID: String,
        presentingViewController: UIViewController? = nil,
        completion: @escaping (PayPalCheckoutResult) -> Void
    ) {
        CheckoutFlow.set(config: config, returnURL: returnURL)

        CheckoutFlow.start(
            presentingViewController: presentingViewController,
            createOrder: { order in
                order.set(orderId: orderID)
            },
            onApprove: { approval in
                let payPalResult = PayPalResult(
                    orderID: approval.ecToken,
                    payerID: approval.payerID
                )
                completion(.success(result: payPalResult))
            },
            onCancel: {
                completion(.cancellation)
            },
            onError: { errorInfo in
                completion(.failure(error: PayPalError.nativeCheckoutSDKError(errorInfo)))
            }
        )
    }
}
```

### Improvements

- Fetch merchant configuration from a PayPal backend and infer `returnUrl` to reduce the number of parameters needed when constructing a `PayPalClient` instance.


----
