# Components

- DropIn UX Components
  * Offer merchants a feature complete low-code integration
  * Lowest integration effort

- Standard UX Components
  * Offer merchants slices of functionality
  * Medium integration effort

- Feature Clients 
  * Offer merchants a fully customizable headless integration
  * May be used alongsize DropIn and Standard UX Components
  * Highest integration effort

## DropIn UX Component Examples

### Android

```xml
  <PayPalCardForm
    android:id="@+id/card_form"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
  />
```

```kotlin
  private fun setupPayPalCardForm() {
    val cardForm = findViewById<PayPalCardForm>(R.id.card_form)
    cardForm.configure("<CLIENT_ID>", "<CLIENT_SECRET>")
  }
```

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

