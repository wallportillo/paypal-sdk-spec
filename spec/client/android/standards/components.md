# Components

- Drop-in Components
  * Lowest integration effort
  * Offer merchants a feature complete low-code integration

- Standalone UX Components
  * Medium integration effort
  * Used in tandem with feature clients
  * Offer merchants slices of functionality

- Feature Clients
  * Highest integration effort
  * Offer merchants a fully customizable headless integration
  * May be used alongsize Drop-in and Standard UX Components

## Drop-in UX Component Examples

### Android

```kotlin
private fun setupDropInPayPalComponent() {
  val dropInClient = PayPalDropInClient("<CLIENT_ID>", "<CLIENT_SECRET>")
  dropInClient.start(activity)
}
```

## Standard UX Component Examples

### Android

```xml
<PayPalStandaloneUXComponent
  android:id="@+id/paypal_standalone_component"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
/>
```

```kotlin
private fun setupPayPalStandaloneComponent() {
  val standaloneComponent =
    findViewById<PayPalStandaloneComponent>(R.id.paypal_standalone_component)
  val payPalRequest = PayPalRequest(standaloneComponent.data)

  val featureClient = PayPalFeatureClient("<CLIENT_ID>", "<CLIENT_SECRET>")
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
  val client = PayPalClient("<CLIENT_ID>", "<CLIENT_SECRET>")
  val featureClient = PayPalFeatureClient("<CLIENT_ID>", "<CLIENT_SECRET>")

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
