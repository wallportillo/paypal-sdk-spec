# Android Card Field Spec

## Importing the Card UI Module

```groovy
implementation "com.paypal.android:card-ui:$latestVersion"
```

## Custom Card Views

### `CardNumberTextField`

A numeric text field that takes in a card number.

```xml
<CardNumberTextField
	android:id="@+id/card_number_text_field" />
```

### `CardNumberExpirationDateTextField`

A numeric text field with MM/YY or MM/YYYY autoformatting.

```xml
  <CardExpirationDateTextField
    android:id="@+id/card_expiration_date_text_field" />
```

### `CardSecurityCodeTextField`

A card brand aware self validating secure numeric text field.

```xml
  <CardSecurityCodeTextField
    android:id="@+id/card_security_code_text_field" />
```

### Example Integration
```xml
<LinearLayout>

    <TextView 
        android:text="Card Number" />
    <CardNumberTextField 
        android:id="@+id/card_number_text_field" />

    <TextView 
        android:text="Card Expiration" />
    <CardExpirationDateTextField 
        android:id="@+id/card_expiration_date_text_field" />

    <TextView 
        android:text="Security Code" />
    <CardSecurityCodeTextField 
        android:id="@+id/card_security_code_text_field" />

    <Button 
        android:id="@+id/submit_button" 
        android:text="Submit" />

</CardFieldsView>
```

```kotlin
class MerchantActivity : Activity() {

    @Override
    fun onCreate() {
        val cardNumberField = findViewById(R.id.card_number_text_field)
        val cardExpirationField = findViewById(R.id.card_expiration_date_text_field)
        val securityCodeField = findViewById(R.id.card_expiration_date_text_field)

        cardUiClient.setCardFields(cardNumberField, cardExpirationField, securityCodeField)

        findViewById(R.id.submit_button).setOnClickListener {
            submitOrder()
        }
    }

    private fun submitOrder() {
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

        cardUiClient.executeOrder(orderRequest) { result ->
            when (result) {
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