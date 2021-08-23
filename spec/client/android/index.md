# Android

## Card

```gradle
  implementation "com.paypal.android:card:$latestVersion"
```

```xml
  <CardForm />
```

```xml
  <CardNumberTextField />
```

```xml
  <CardExpirationDateTextField />
```

```xml
  <CardSecurityCodeTextField />
```

## With DropIn UI

```kotlin
  val cardForm = findViewById(R.id.card_form) as CardForm

  val cardPayments = CardPayments(<AUTH_CREDENTIALS>)
  cardForm.card?.let { card ->
    withContext(Dispachers.IO) {
      val orderID = cardPayments.createOrder(card)
      // send order to your server
    }
  }
```

## With Custom UI

```kotlin
  val cardPayments = CardPayments(<AUTH_CREDENTIALS>)

  val card = Card().apply {
    number = "4111111111111111"
    expirationDate = "02/24"
    securityCode = "123"
  }

  withContext(Dispachers.IO) {
    val orderID = cardPayments.createOrder(card)
    // send order to your server
  }
```
