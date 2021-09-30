# Payment Buttons

Here are some styled buttons you can add to your application.

## 1) Adding button to layout

### PayPalButton

![paypal_button_1](../../../static/paypal_button_1.png)

![paypal_button_2](../../../static/paypal_button_2.png)

```xml
<com.paypal.checkout.paymentbutton.PayPalButton
    android:id="@+id/payPalButton"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:payment_button_shape="[rounded/pill/rectangle]"
    app:payment_button_size="[small/medium/large]"
    app:paypal_color="[gold/blue/white/black/silver]"
    app:paypal_label="[paypal/checkout/buy_now/pay]" />
```

### PayPalCreditButton

![paypal_button_1](../../../static/paypal_credit_button.png)

```xml
<com.paypal.checkout.paymentbutton.PayPalCreditButton
    android:id="@+id/payPalCreditButton"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:payment_button_shape="[rounded/pill/rectangle]"
    app:payment_button_size="[small/medium/large]"
    app:paypal_credit_color="[dark_blue/black/white]" />
```

## 2) Add button click listener

```kotlin
payPalbutton.setOnClickListener {
    // launch PayPal or PayPal Credit flow        
}
```