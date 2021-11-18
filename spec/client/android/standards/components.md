# Components

- UI Components
  * Low integration effort
  * View layer components, useful for branding, custom buttons, etc.

- Drop-in Components
  * Low integration effort
  * Offer merchants a feature complete low-code integration

- Controlled UI Components
  * Medium integration effort
  * Used in tandem with feature clients
  * Offer merchants slices of functionality

- Feature Clients
  * High integration effort
  * Offer merchants a fully customizable headless integration
  * May be used alongsize Drop-in and Controlled UI Components

## UI Component Examples

```xml
<PayPalUIComponent
  android:id="@+id/paypal_ui_component"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
/>
```

```kotlin
private fun setupPayPalUIComponent() {
  val uiComponent = findViewById<PayPalUIComponent>(R.id.paypal_ui_component)
  uiComponent.onClickListener = { view ->
    // handle click interaction
  }
}
```

## Drop-in Component Examples

```kotlin
private fun setupDropInPayPalComponent() {
  val config = CoreConfig(clientId = "<CLIENT_ID>")
  val dropInClient = PayPalDropInClient(config = config)
  dropInClient.start(activity)
}
```

## Controlled UI Component Examples

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
      }
    }
  }
}
```

## Feature Client Examples

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
      }
    }
  }
}
