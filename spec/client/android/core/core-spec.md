## Core spec

#### CoreConfig

```kotlin
data class CoreConfig(
    val clientID: String,
    val environment: Environment
)
```

#### Models

```kotlin
data class OrderData(
    val orderID: String,
    val status: OrderStatus,
)

enum class OrderStatus {
    CREATED,
    APPROVED,
    COMPLETED
}

// TODO: Update with finalized SDK's error type

data class OrderError(
    val name: String,
    val message: String,
    val details: List<OrderErrorDetail> = emptyList()
)

data class OrderErrorDetail(
    val issue: String,
    val description: String
)
```
