# Inputs

This doc details some standard inputs across client platforms.

This is an abstract doc which uses pseudocode and examples to explain these inputs in a general sense. Each platform may spec these out in a platform-specific way, depending on what is appropriate for that platform. See [Specifications](./specifications.md).

## Payment Method Token

The `paymentMethodToken` token represents a tokenized instrument, and is required for any case where a buyer is returning to pay with a vaulted/tokenized instrument. This may be used to give the buyer a more seamless payment experience (e.g. one-click payments).

This parameter may be passed in directly to any component which can utilize it.

```pseudocode
await approvePurchaseWithToken(orderID, paymentMethodToken)
```

```pseudocode
SomePaymentComponent(
    paymentMethodToken
)
```

For example:

- A one-click button which allows the buyer to click and pay in a single step
- A card field component which allows re-collecting CVV to make a payment using an existing card
- A component which tokenizes an instrument and returns a tokenized instrument back to the merchant

In purchase cases, it is expected that the merchant would provide both a `paymentMethodToken` and an `orderID`:

- `paymentMethodToken`: the instrument the buyer will use to pay 
  - e.g. `Visa-1234 card`, `foo@bar.com PayPal account`
- `orderID`: the transaction the buyer will be approving
  - e.g. `$13.37 USD`, with line item of `zoid action figure` and `$3.55 shipping`

## Order ID

The `orderID` token represents a purchase, and is required for any case involving a purchase:

- A first time user making a purchase with a new instrument
- A returning user making a purchase with a vaulted instrument

For cases where there is no purchase, `orderID` is not relevant and should not be passed. e.g.

- Tokenizing/vaulting an instrument

There are two standard ways to accept `orderID` into an SDK component or function:

### Data Handlers

Functions which are purely data-driven, e.g. "tokenize this card", can accept orderID as a raw string. For example:

```pseudocode
await tokenizeInstrument(orderID, card)
```

#### Example use case

- The merchant collects a payment instrument from the buyer (e.g. card, apple pay)
- The merchant creates an `orderID` to facilitate a payment
- The merchant passes the `orderID` plus the instrument to the SDK
- The SDK approves the order using the instrument
- The SDK hands control back to the merchant

### UX Components

Components which have some associated UX (e.g. buttons, card fields, wallet), typically accept a `createOrder` callback. For example:

```pseudocode
SomePaymentComponent(
    createOrder() {
        // Return the `orderID` here
    }
)
```

#### Example use case

- The SDK renders some experience
- The user interacts with that experience (e.g. submit a form, click a button, etc.)
- The SDK needs an `orderID` to proceed with a payment approval
- The SDK calls the `createOrder` callback
- While the callback runs, the SDK can display a loading spinner or loading state
- When the `orderID` is returned, the SDK can proceed with the payment approval

#### Parameters

The `createOrder` callback can be passed parameters that are useful to the merchant, e.g.

- What the current funding instrument is (e.g. card, paypal, venmo)
- Helper functions to facilitate client-side api calls
- Other metadata or helper functions

#### API Agnosticism

The SDK has no preference for when and how the `orderID` was created when it calls `createOrder`:

- It could be generated and passed in, in advance
- It could be generated on the fly from a merchant server-side api call
- It could be generated on the fly from a merchant client-side api call
- The same orderID can be used no matter which component the buyer chooses to interact with (e.g. card fields, buttons)

This gives the merchant maximum flexibility for how and when to create an `orderID`

#### Event Agnosticism

The Merchant has no preference for which event required an `orderID` and triggered the `createOrder` callback:

- The user could submit a form
- Or the user could click a button
- Or the user could select a menu option
- Or the user could interact with a component using their keyboard or some other input

This gives the SDK maximum future flexibility to generate an `orderID` for future events and use-cases, as and when needed. (Rather than being tightly coupled to a specific event like a button click)

## Buyer Approval

Buyers may complete several different actions via the SDK:

- Approving a purchase
- Approving a tokenization/vault (or billing agreement)
- Approving a subscription

In each of these cases, the role of the SDK is to:

- Allow the merchant to initialize a particular experience or payment mechanism 
  - e.g. buttons, card fields
- Allow the buyer to do the approval
  - e.g. entering and submitting card number, logging into venmo account and approving a payment
- Hand control back to the merchant to finalize whatever the buyer approved
  - e.g. vault the card, capture the payment, authorize the payment

There are two standard ways to hand back control and signal this approval back to the merchant:

### Data Handlers

Functions which are purely data-driven, e.g. "tokenize this card", can simply resolve successfully. For example:

```pseudocode
tokenizedCard = await tokenizeInstrument(orderID, card)
```

```pseudocode
purchaseResult = await approvePurchaseWithToken(orderID, paymentMethodToken)
```

```pseudocode
purchaseResult = await approvePurchaseWithCard(orderID, card)
```

#### Example use case

- The merchant collects a payment instrument from the buyer (e.g. card, apple pay)
- The merchant creates an `orderID` to facilitate a payment
- The merchant passes the `orderID` plus the instrument to the SDK
- The SDK approves the order using the instrument
- The SDK hands control back to the merchant by resolving the function call

### UX Components

Components which have some associated UX (e.g. buttons, card fields, wallet), typically accept an `onApprove` callback. For example:

```pseudocode
SomePaymentComponent(
    onApprove() {
        // Finalize here
    }
)
```

The `onApprove` callback signals back to the merchant that the buyer has approved whatever they set out to approve.

#### Example use case

- The SDK renders some experience
- The user interacts with that experience and approves a payment or tokenization
- The SDK calls `onApprove` to return control to the merchant

#### Parameters

The `onApprove` callback can be passed parameters that are useful to the merchant, e.g.

- Any relevant tokens, e.g. `orderID` or `paymentMethodToken`
- What the used funding instrument is (e.g. card, paypal, venmo)
- Helper functions to facilitate client-side api calls
- Other metadata or helper functions

#### API Agnosticism

The SDK has no preference for what the merchant does when it calls `onApprove`:

- The merchant could make a server-side api call
- The merchant could make a client-side api call
- The merchant could collect more data from the buyer or show a confimration page

This gives the merchant maximum flexibility for how to act after a buyer approves a payment or tokenization/vault.

#### Event Agnosticism

The Merchant has no preference for which sequence of actions triggered the `onApprove` callback:

- The user could submit a credit card
- Or the user could do an app switch to venmo
- Or the user could log into paypal

This gives the SDK maximum future flexibility to hand control back to merchants for future events and use-cases, as and when needed. (Rather than being tightly coupled to specific flows)

## Buyer Cancellation

Whenever the buyer cancels out of a UX components, the SDK invokes an `onCancel` callback.

This use-case is only relevant to UX components (data functions would typically not have any experience from which a buyer can cancel out).

```pseudocode
SomePaymentComponent(
    onCancel() {
        // Allow the buyer to proceed a different way
    }
)
```

#### Example use case

- The SDK renders some experience
- The user interacts with that experience but decides to cancel for any reason
- The SDK calls `onCancel` to return control to the merchant

#### Notes

This case is not covered by `onError` since it is not considered an error case:

- The buyer made a conscious choice to pay or tokenize a different way
- The merchant should not show an error page or message; instead they should give the buyer different options for how to pay or tokenize or continue shopping

## Errors

Any time there is an unhandleable error from the SDK, this needs to be communicated back to the merchant.

Errors should typically have an error code which can be used to show a specific message to the buyer.

### Data Handlers

Functions which are purely data-driven, e.g. "tokenize this card", can simply throw or return an error code:

```pseudocode
try
    tokenizedCard = await tokenizeInstrument(orderID, card)
catch
    // Show the buyer an error message
```

```pseudocode
purchaseResult, error = await approvePurchaseWithToken(orderID, paymentMethodToken)

if error
    // Show the buyer an error message
```

### UX Components

Components which have some associated UX (e.g. buttons, card fields, wallet), typically accept an `onError` callback. For example:

```pseudocode
SomePaymentComponent(
    onError(err) {
        // Show the buyer an error message
    }
)
```