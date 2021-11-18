## Step-by-step card integration

### Basic server-side integration

#### 1. Import card module

Add dependencies to app module's build.gradle file.
```groovy
dependencies {
    implementation 'com.paypal.android:card:1.0.0'
    implementation 'com.paypal.android:paypal:1.0.0'
}
```

#### 2. Initialize CoreConfig and CardClient

```kotlin
val config = CoreConfig(
    clientID = [your_clientID],
    environment = Environment.SANDBOX
)
val cardClient = CardClient(config)
```

#### 3. Create an order in your server

#### 4. Approve order with buyer's card info and authorize/capture the order

```kotlin
// Create a Card object from buyer's input
val card = Card(
    number = [card_number],
    expirationMonth = [expiration_month],
    expirationYear = [expiration_year],
    securityCode = [security_code]
)

// Approve order with the orderId of the order you created in your server in step 3
cardClient.approveOrder([order_id], card) { result ->
    result.response?.let { response ->
        Authorize -> {
            // Authorize the order in your server with order ID `response.orderID`
        }
        Capture -> {
            // Capture the order in your server with order ID `response.orderID`
        }
    }

    result.error?.let { error ->
        // Handle error. The error message can be logged with `error.message`
    }
}
```
