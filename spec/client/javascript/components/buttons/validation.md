# Validation

Validation allows you to use the button to validate a form, and suppress the button action when the user clicks. This can be done in synchronously or asynchronously.

## Synchronous Validation

- Render form fields which you want to validate, e.g. a checkbox
- Initialize the buttons component
  - Pass in an `onClick` callback
  - If click is called, but the fields are in an invalid state, show an error message
- Call `buttons.enable()` to disable the buttons by default until the form is in a valid state
- Listen for form-field changes
  - If the form enters a valid state, call `buttons.enable()`
  - If the form enters an invalid state, call `buttons.disable()`

```html
<input type="checbox" id="checkbox" />
<p id="errormessage" class="hidden">Please check the box before continuing</p>
```

```javascript
const buttons = paypal.Buttons({
    onClick: () => {
        if (!checkbox.checked) {
            errormessage.classList.remove('hidden');
        }
    }
});

buttons.disable();

checkbox.addEventListener('change', event => {
    if (event.target.checked) {
        buttons.enable();
    } else {
        buttons.disable();
    }
});

buttons.render('#paypal-button-container');
```

## Asynchronous Validation

- Render form fields which you want to validate, e.g. a checkbox
- Initialize the buttons component
  - Pass in an `onClick` callback
  - If click is called, and the fields are in a valid state, allow the click to go through with `actions.resolve()`
  - If click is called, but the fields are in an invalid state, show an error message and reject the click with `actions.reject()`

```html
<input type="checbox" id="checkbox" />
<p id="errormessage" class="hidden">Please check the box before continuing</p>
```

```javascript
paypal.Buttons({
    onClick: (data, actions) => {
        if (checkbox.checked) {
            return actions.resolve();
        } else {
            errormessage.classList.remove('hidden');
            return actions.reject();
        }
    }
}).render('#paypal-button-container');
```
