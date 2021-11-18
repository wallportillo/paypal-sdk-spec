## Card spec

#### CardClient

```kotlin
// API client that handles card network requests
class CardClient: Client {

    /**
     * Confirm [Card] payment source for an order.
     *
     * @param orderID The id of the order
     * @param card The card to use for approval
     * @param completion A completion handler for receiving a [ConfirmPaymentSourceResult]
     */
    fun approveOrder(
        orderID: String,
        card: Card,
        completion: (ConfirmPaymentSourceResult) -> Unit
    )
}

data class ConfirmPaymentSourceResult(
    val response: OrderData? = null,
    val error: OrderError? = null
)
```

#### Models

```kotlin
data class Card(

    /**
     * The card number
     */
    var number: String,

    /**
     * 2-digit card expiration month
     */
    val expirationMonth: String,

    /**
     * 4-digit card expiration year
     */
    val expirationYear: String,

    /**
     * Optional. The card's security code (CVV, CVC, CVN, CVE, or CID)
     */
    var securityCode: String? = null,

    /**
     * Optional. The card holder's name as it appears on the card
     */
    var cardholderName: String? = null,

    /**
     * Optional. The portable international postal address
     */
    var billingAddress: Address? = null,
)
```
