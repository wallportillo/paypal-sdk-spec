# Android

The PayPal Android SDK is composed of set of invidual modules. Each feature module provides support for a specific payment method. Merchants decide which payment methods their app will support by importing a select set of modules.

## Feature: Card

```gradle
  implementation "com.paypal.android:card:$latestVersion"
```

### Use DropIn UI for a Quick Start

```xml
  <CardForm
    android:id="@+id/card_form" />
```

```xml
  <CardNumberTextField
    android:id="@+id/card_number_text_field" />
```

```xml
  <CardExpirationDateTextField
    android:id="@+id/card_expiration_date_text_field" />
```

```xml
  <CardSecurityCodeTextField
    android:id="@+id/card_security_code_text_field" />
```

### Create Card Orders With DropIn UI

```kotlin
  val cardForm = findViewById(R.id.card_form) as CardForm

  val cardPayments = CardPayments(<AUTH_CREDENTIALS>)
  cardForm.card?.let { card ->
    withContext(Dispachers.IO) {
      val orderID = cardPayments.createOrder(card)
      // send orderID to your server
    }
  }
```

### Create Card Orders With Custom UI

```kotlin
  val cardPayments = CardPayments(<AUTH_CREDENTIALS>)

  val card = Card().apply {
    number = "4111111111111111"
    expirationDate = "02/24"
    securityCode = "123"
  }

  withContext(Dispachers.IO) {
    val orderID = cardPayments.createOrder(card)
    // send orderID to your server
  }
```
