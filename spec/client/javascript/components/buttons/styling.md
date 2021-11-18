# Styling

## Layout

See [Layouts](./layouts.md)

## Size

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

#### PayPal Button

(Note: this includes the standalone PayPal button, and vertical and horizontal [Layouts](./layouts.md))

- `gold` (default)
- `blue`
- `silver`
- `black`
- `white`

#### Credit Button

- `darkblue` (default)
- `black`
- `white`

#### Pay Later Button

- `white` (default)
- `blue`
- `silver`
- `black`

#### Venmo Button

- `blue` (default)
- `silver`
- `black`
- `white`

#### Card Button

- `black` (default)
- `white`

#### Other Buttons

- `silver` (default)
- `black`
- `white`

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
        label: 'pay'
    }
}).render('#paypal-buttons-container');
```

### Available Labels

- `checkout`
- `pay`
- `buynow`

## Tagline

Customize the display of the tagline under the buttons.

```javascript
paypal.Buttons({
    style: {
        tagline: false
    }
}).render('#paypal-buttons-container');
```

### Available Taglines

- `true` (default)
- `false`
