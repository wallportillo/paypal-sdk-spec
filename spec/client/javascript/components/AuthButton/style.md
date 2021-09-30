# Styling
    AuthButton have property to support style , you can pass these valid parameters in style object, button will render based on these input parameters.
    ```
        style: {
          color: 'blue',
          height: 35,
          label: 'login',
          shape: 'pill'
        }
    ```

## Layout

See [Layouts](./layouts.md)

### Width

Buttons have responsive width: they will take the size of the container element up to a maximum of 800px.

### Height

Customize the height of the buttons in pixels.

```javascript
paypal.Buttons({
    style: {
        height: 30
    }
}).render('#paypal-buttons-container');
```

- Minimum height: `25`
- Maximum height: `55`

Note: due to aspect-ratio requirements for the button, the requested height may fall out of bounds in lower-width and higher-width cases. In this case the minimum or maximum height appropriate to the current button width will be applied.

## Color

Customize the color of the buttons.

```javascript
paypal.Buttons({
    style: {
        color: 'blue'
    }
}).render('#paypal-buttons-container');
```

### Available Colors

1. Blue
2. silver

#### LIPP PayPal Button

(Note: this includes the standalone PayPal button, and vertical and horizontal [Layouts](./layouts.md))

- `blue` (default)
- `silver`

## Shape

Customize the shape of the buttons.

```javascript
paypal.Buttons({
    style: {
        shape: 'pill'
    }
}).render('#paypal-buttons-container');
```

### Available Shapes

- `rect` (default)
- `pill`

## Label

Customize the label of the buttons.

```javascript
paypal.Buttons({
    style: {
        label: 'login'
    }
}).render('#paypal-buttons-container');
```

### Available Labels

- `continue`
- `signup`
- `connect`
- `login`

