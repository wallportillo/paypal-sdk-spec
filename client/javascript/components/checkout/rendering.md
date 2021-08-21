# Checkout Rendering

Render the checkout experience as a global/modal experience in your app.

## Web - JavaScript

### Basic Render

```javascript
paypal.Checkout().render()
```

### Passing props

```javascript
paypal.Checkout({
    fundingSource: paypal.FUNDING.VENMO
}).render()
```

## iOS - Swift

### Basic Render

```swift
paypal.Checkout().render()
```

### Passing props

```javascript
paypal.Checkout({
    fundingSource: .venmo
}).render()
```

## iOS - Objective C

### Basic Render

```objectivec
TBD
```

### Passing props

```objectivec
TBD
```

## Android - Kotlin

### Basic Render

```kotlin
paypal.Checkout().render()
```

### Passing props

```kotlin
paypal.Checkout({
    fundingSource: Funding.VENMO
}).render()
```

## Android - Java

### Basic Render

```java
TBD
```

### Passing props

```java
TBD
```