# Button Layouts

## Standalone

Standalone allows rendering a single button at a time. This gives the most flexibility to the merchant to arrange the buttons in any layout.

### Vanilla Javascript

#### Single, standalone PayPal button

```javascript
paypal.AuthButton({ 
    responseType: 'id_token',
    style: {},
        onApprove: data => {
        // this will return the id token in the payload
        // data = { idToken: "<value>" } , { auth_code : "<value>"}
        },
        onCancel : function(data){
        // console.log(data)    
        }
    }).render('#paypal-button-container');
```





### React

#### Single, standalone PayPal button

```javascript
const App = () => {
    return (
        <AuthButton  />
    );
}
```

#### Multiple standalone buttons

___TBD___

#### All eligible standalone buttons

___TBD___

## Horizontal

Horizontal button layout renders either:

- Just the PayPal button, if it is the only eligible button
- The PayPal button and another secondary button, if others are eligible. Which secondary button is rendered is determined automatically by the PayPal SDK.

### Vanilla Javascript

```javascript
paypal.Buttons({
    style: {
        layout: 'horizontal'
    }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    const style = {
        layout: 'horizontal'
    };

    return (
        <PayPalButtons style={ style } />
    );
}
```

## Vertical

Horizontal button layout renders either:

- Just the PayPal button, if it is the only eligible button
- The PayPal button and other secondary buttons, if others are eligible. Which secondary buttons are rendered is determined automatically by the PayPal SDK.

### Vanilla Javascript

```javascript
paypal.Buttons({
    style: {
        layout: 'vertical'
    }
}).render('#paypal-buttons-container');
```

### React

```javascript
const App = () => {
    const style = {
        layout: 'vertical'
    };

    return (
        <PayPalButtons style={ style } />
    );
}
```