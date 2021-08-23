# JS SDK Initialization

## Script Tag

- Load the SDK from `paypal.com/sdk/js?client-id=xyz`.
- This provides the `window.paypal` namespace

```html
<script src="https://www.paypal.com/sdk/js?client-id=test"></script>

<script>
  paypal.Foo();
</script>
```

### Initialization Parameters

Initialization Parameters can be passed via the script url query, and/or via data attributes. e.g.

```html
<script
    src="https://www.paypal.com/sdk/js?client-id=test&components=buttons"
    data-user-id-token="xyz"></script>
```

- **URL Query Paramers** shall be used where:
  - The parameter is required for the initialization of the SDK on the server (e.g. eligibility decisioning)
  - The parameter is highly cacheable for different users on the same merchant page (e.g. client id, currency)
- **Data Attribute Parameters** shall be used where:
  - The parameter is required only on the client-side for initialization of the SDK (e.g. user id token)
  - The parameter is not highly cacheable for different users on the same merchant page (e.g. client metadata id)

#### URL Query Paramers

##### Client ID

- Mandatory
- Default: not set

Facilitator Client ID for the integration. Either:

- The Client ID of the merchant directly accepting payments
- The Client ID of the partner or facilitor, facilitating payments on behalf of a merchant

Example:

```html
<script src="https://www.paypal.com/sdk/js?client-id=test"></script>
```

##### Merchant ID

- Optional
- Default: derived from client id

Merchant ID which will be receiving payments. Only required if payee account is different than facilitator account.

If multiple merchants / multiple sellers, pass `*` and use [`data-merchant-id`](#merchant-ids) option.

Example:

```html
<script src="https://www.paypal.com/sdk/js?client-id=test&merchant-id=ABC123"></script>
```

#### Components

- Optional
- Default: buttons

Components which should be loaded as part of the SDK. Comma-separated, dashed names.

Available components:

- [`buttons`](./components/buttons/index.md)
- [`card-fields`](./components/card-fields/index.md)
- [`marks`](./components/marks/index.md)
- [`messages`](./components/messages/index.md)
- [`checkout`](./components/checkout/index.md) (internal)
- __TBD__

Different components export different globals to the `window.paypal` namespace, e.g.

- `buttons` exports `paypal.Buttons`
- `card-fields` exports `paypal.CardNumberField`, `paypal.CardExpiryField`, etc.

Example:

```html
<script src="https://www.paypal.com/sdk/js?client-id=test&components=buttons,card-fields"></script>
```

#### Buyer Country

- Optional
- Default: buyer ip geolocation

Pass in a custom country to inform the SDK of the geolocation of the user. Used primarily for eligibility.

See [Country Support](./support/countries.md)

#### Data Attribute Parameters

##### Merchant IDs

- Optional
- Default: derived from client id

Merchant IDs which will be receiving payments. Only required if multiple payees.

Used for cases where multiple merchant ids must be passed (permutations are not highly cacheable, so can not be passed as query param)

```html
<script src="https://www.paypal.com/sdk/js?client-id=test&merchant-id=*" data-merchant-id="ABC123,XYZ456"></script>
```



## NPM Module

- __TBD__
- https://github.com/paypal/paypal-sdk-spec/discussions/10
