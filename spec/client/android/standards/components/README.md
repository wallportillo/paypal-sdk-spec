# Components

- Drop-in Components
  * Lowest integration effort
  * Offer merchants a feature complete low-code integration

- Standalone UX Components
  * Medium integration effort
  * Offer merchants slices of functionality

- Feature Clients 
  * Highest integration effort
  * Offer merchants a fully customizable headless integration
  * May be used alongsize Drop-in and Standard UX Components

## Drop-in UX Component Examples

### Android

```xml
<PayPalDropInComponent
  android:id="@+id/paypal_component"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
/>
```

```kotlin
private fun setupDropInPayPalComponent() {
  val dropInComponent = findViewById<PayPalComponent>(R.id.paypal_dropin_component)
  dropInComponent.configure("<CLIENT_ID>", "<CLIENT_SECRET>")
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

  val client = PayPalClient("<CLIENT_ID>", "<CLIENT_SECRET>")
  client.sendRequest(payPalRequest) { result ->
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

__TODO__

## Feature Client Examples

__TODO__

# From JIRA

Create a spec document outlining the different integration patterns we'll have in the Mobile Northstar SDKs. This spec will act as a blueprint for all modules in the SDK.

Items we might want to add:

- helper functions structure
  * how do we vend results to the merchant? ("result" structure?) 
  * how do merchants implement callbacks? (delegation vs callbacks)
- ux components
  * how do merchants interact with drop in components
  * how do they set callbacks on UX components
- naming conventions for constants and enums

# Scratch

Features (so far):
- Card
- PayPal

Ideal Integrations for Card:
- CardForm (Lowest effort)
- CardFields
- CardClient (Highest effort)

Ideal Integrations for PayPal:
- PayPalButton (Lowest effort)
- PayPalClient (Highest effort)
