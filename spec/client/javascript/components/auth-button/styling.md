# Styling

## Size

### Width

Buttons have responsive width: they will take the size of the container element up to a maximum of 800px.

### Height

Customize the height of the buttons in pixels.

```javascript
paypal.AuthButton({
    style: {
        height: 30
    }
}).render('#auth-button-container');
```

- Minimum height: `25`
- Maximum height: `55`

Note: due to aspect-ratio requirements for the button, the requested height may fall out of bounds in lower-width and higher-width cases. In this case the minimum or maximum height appropriate to the current button width will be applied.

## Color

Customize the color of the buttons.

```javascript
paypal.AuthButton({
    style: {
        color: 'blue'
    }
}).render('#auth-button-container');
```

### Available Colors for AuthButton

- `blue` (default)
- `silver`

## Shape

Customize the shape of the buttons.

```javascript
paypal.AuthButton({
    style: {
        shape: 'pill'
    }
}).render('#auth-button-container');
```

### Available Shapes

- `rect` (default)
- `pill`

## Label

Customize the label of the buttons.

```javascript
paypal.AuthButton({
    style: {
        label: 'continue'
    }
}).render('#auth-button-container');
```

### Available Labels

- `continue`
- `signup`
- `connect`
- `login`
