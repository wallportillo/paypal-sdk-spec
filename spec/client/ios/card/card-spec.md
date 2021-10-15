## Card spec

#### CardClient

```swift
// API client that handles card network requests
public class CardClient: Client {

    // To be used when buyer submits their card info
    // This function will validate buyer's card, and if valid, the order will be paid with this card
    // Merchants will need to handle capturing/authorizing the order in their server.
    public func approveOrder(orderID: String, card: Card, completion: (Result<OrderData, Error>) -> Void)
}
```

#### Models

```swift
public struct Card: PaymentSource {

    /// The primary account number (PAN) for the payment card.
    public var number: String

    /// The card expiration month in `MM` format
    public var expirationMonth: String

    /// The card expiration year in `YYYY` format
    public var expirationYear: String

    /// The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID.
    public var securityCode: String

    /// The card holder's name as it appears on the card.
    public var cardholderName: String?

    /// The billing address
    public var billingAddress: Address?
}
```
