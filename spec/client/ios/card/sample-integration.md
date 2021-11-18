## Step-by-step card integration

### Basic server-side integration

#### 1. Import card module

```swift
import CardPayment
```

#### 2. Initialize CoreConfig and CardClient

```swift
let config = CoreConfig(clientID: <your_clientID>, environment: .sandbox)
let cardClient = CardClient(config: config)
```

#### 3. Create an order in your server

#### 4. Approve order with buyer's card info and authorize/capture the order

```swift
// Create a Card object from buyer's inputs
let card = Card(
    number: <card_number>,
    expirationMonth: <expiration_month>,
    expirationYear: <expiration_year>,
    securityCode: <security_code>
)

// Approve order with the orderID of the order you created in your server in step 3
cardClient.approveOrder(orderID: <orderID>, card: card) { result in
    switch result {
    case let .success(orderData):
        // Authorize/capture the order
        switch orderData.intent {
        case .authorize:
            // Authorize the order in your server with order ID `orderData.orderID`
        case .capture:
            // Capture the order in your server with order ID `orderData.orderID`
        }
    case let .failure(error):
        // Handle error
        print(error)
    }
}
```
