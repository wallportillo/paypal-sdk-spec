# onCancel Auth

Callback used to signal user consent cancelled due to an incomplete auth button flow.

## Examples


### Capture cancel consent code

```javascript
const onCancel = (data) => {
    // data will contain information about the canceled consent request
};
```

## Types

```javascript
type OnCancel = (
    data : OnCancelData,
    actions : OnCancelActions
) => undefined | Promise<undefined>

type OnCancelData = {

};

type OnCancelActions = {

};
```
