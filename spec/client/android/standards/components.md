# Components

- Drop-in Components
  * Lowest integration effort
  * Offer merchants a feature complete low-code integration

- Controlled UI Components
  * Medium integration effort
  * Used in tandem with feature clients
  * Offer merchants slices of functionality

- Feature Clients
  * Highest integration effort
  * Offer merchants a fully customizable headless integration
  * May be used alongsize Drop-in and Controlled UI Components

## Drop-in UX Component Examples

### Android

```kotlin
private fun setupDropInPayPalComponent() {
  val config = CoreConfig(clientId = "<CLIENT_ID>")
  val dropInClient = PayPalDropInClient(config = config)
  dropInClient.start(activity)
}
```

## Controlled UI Component Examples

### Android

```xml
<PayPalControlledUIComponent
  android:id="@+id/paypal_controlled_ui_component"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
/>
```

```kotlin
private fun setupPayPalControlledUIComponent() {
  val controlledUIComponent =
    findViewById<PayPalControlledUIComponent>(R.id.paypal_controlled_ui_component)
  val payPalRequest = PayPalRequest(controlledUIComponent.data)

  val config = CoreConfig(clientId = "<CLIENT_ID>")
  val featureClient = PayPalFeatureClient(config = config)
  featureClient.sendRequest(payPalRequest) { result ->
    when (result) {
      is PayPalResult.Success -> {
        // handle success
      },
      is PayPalResult.Failure -> {
        // handle failure
      },
      is PayPalResult.Cancellation -> {
        // handle cancellation
      }
    }
  }
}
```

## Feature Client Examples

### Android

```kotlin
private fun setupPayPalFeatureClient() {
  val config = CoreConfig(clientId = "<CLIENT_ID>")
  val featureClient = PayPalFeatureClient(config = config)

  // it's up to merchant to instantiate request data
  val payPalRequest = PayPalRequest(PayPalData())
  featureClient.sendRequest(payPalRequest) { result ->
    when (result) {
      is PayPalResult.Success -> {
        // handle success
      },
      is PayPalResult.Failure -> {
        // handle failure
      },
      is PayPalResult.Cancellation -> {
        // handle cancellation
      }
    }
  }
}
