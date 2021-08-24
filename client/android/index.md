# Android

The PayPal Android SDK is composed of set of invidual modules. Each feature module provides support for a specific payment method. Merchants decide which payment methods their app will support by importing a select set of modules.

## Feature: Card

```gradle
  implementation "com.paypal.android:card:$latestVersion"
```

### Use DropIn UI for a Quick Start

There are several UI components available to help merchants get started quickly:

#### `CardForm`

A full-featured credit card entry form.

```xml
  <CardForm
    android:id="@+id/card_form" />
```

#### `CardNumberTextField`

A plain text field with card brand detection and card number autoformatting.

```xml
  <CardNumberTextField
    android:id="@+id/card_number_text_field" />
```

#### `CardNumberExpirationDateTextField`

A numeric text field with MM/YY or MM/YYYY autoformatting. 

```xml
  <CardExpirationDateTextField
    android:id="@+id/card_expiration_date_text_field" />
```

#### `CardSecurityCodeTextField`

A card brand aware self validating secure numeric text field.

```xml
  <CardSecurityCodeTextField
    android:id="@+id/card_security_code_text_field" />
```

### Create Card Orders

Create a `CardClient` instance to create orders using a `Card` object.

```kotlin
  val cardClient = CardClient(<AUTH_CREDENTIALS>)
```

#### Create Card Orders With DropIn UI

```kotlin
suspend fun createCardOrder() {
  val cardForm = findViewById(R.id.card_form) as CardForm
  cardForm.card?.let { card ->

    val orderRequest = OrderRequest(
      purchaseUnitList = listOf(
        PurchaseUnit(
          amount = Amount(
            currencyCode = CurrencyCode.USD,
            value = "10.00"
          )
        )
      )
    )

    cardClient.executeOrder(orderRequest, card) { result ->
      when(result) {
        is Success -> {
          // transaction was executed
        }
        is Failure -> {
          // error executing transaction
        }
      }
    }
  }
}
```

#### Create Card Orders With Custom UI

```kotlin
suspend fun createCardOrder() {
  val card = Card().apply {
    number = "4111111111111111"
    expirationDate = "02/24"
    securityCode = "123"
  }

  val orderRequest = OrderRequest(
    purchaseUnitList = listOf(
      PurchaseUnit(
        amount = Amount(
          currencyCode = CurrencyCode.USD,
          value = "10.00"
        )
      )
    )
  )

  cardClient.executeOrder(orderRequest, card) { result ->
    when(result) {
      is Success -> {
        // transaction was executed
      }
      is Failure -> {
        // error executing transaction
      }
    }
  }
}
```
