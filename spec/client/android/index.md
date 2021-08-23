# Android

The PayPal Android SDK is composed of set of invidual modules. Each feature module provides support for a specific payment method. Merchants decide which payment methods their app will support by importing a select set of modules.

## Feature: Card

```gradle
  implementation "com.paypal.android:card:$latestVersion"
```

### Use DropIn UI for a Quick Start

There are several UI components available to help merchants get started quickly:

#### Card Form

This component is useful for merchants who are looking for a fullscreen card entry form.

```xml
  <CardForm
    android:id="@+id/card_form" />
```

#### CardNumberTextField

This component is useful for merchants who want a plain text field with card number autoformatting and card brand detection capabilities, but want to have more control of the layout of the field itself.

```xml
  <CardNumberTextField
    android:id="@+id/card_number_text_field" />
```

#### CardNumberExpirationDateTextField

This component gives merchants an expiration date field that helps guide the user to perform proper data entry of a credit card expiration date.

```xml
  <CardExpirationDateTextField
    android:id="@+id/card_expiration_date_text_field" />
```

#### CardSecurityCodeTextField

This component is a self-validating secure text field that can be configured to validate against a particular card brand to ensure that the correct number of digits has been entered by the user.

```xml
  <CardSecurityCodeTextField
    android:id="@+id/card_security_code_text_field" />
```

### Create Card Orders

Create a `CardPayments` instance to create orders using a `Card` object.

```kotlin
  val cardPayments = CardPayments(<AUTH_CREDENTIALS>)
```

#### Create Card Orders With DropIn UI

```kotlin
  val cardForm = findViewById(R.id.card_form) as CardForm

  cardForm.card?.let { card ->
    withContext(Dispachers.IO) {
      val order = CardOrder(card, "1.00")
      val orderID = cardPayments.createOrder(order)
      // send orderID to your server
    }
  }
```

#### Create Card Orders With Custom UI

```kotlin
  val card = Card().apply {
    number = "4111111111111111"
    expirationDate = "02/24"
    securityCode = "123"
  }

  withContext(Dispachers.IO) {
    val order = CardOrder(card, "1.00")
    val orderID = cardPayments.createOrder(order)
    // send orderID to your server
  }
```
