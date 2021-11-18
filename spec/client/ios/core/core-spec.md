## Core spec

#### CoreConfig

```swift
// Contains shared data that applies to every payment method
public struct CoreConfig {
    let clientID: String
    let environment: Environment
}
```

#### Models

```swift
public class OrderData {
    var orderID: String
    var status: OrderStatus
}

public enum OrderStatus: String {
    case created = "CREATED"
    case approved = "APPROVED"
    case completed = "COMPLETED"
}

// TODO: Update with finalized SDK's error type

public enum SDKError: Error {
    case networkError(metaData: [String: Any], correlationID: String)
    case decodingError
    ...

    var errorCode: Int
    var errorUserInfo: [String: Any]
}
```
