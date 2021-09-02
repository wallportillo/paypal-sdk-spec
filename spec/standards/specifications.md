# Specifications

Specifications in this repository shall:

- Give a full account of the public interface for the PayPal SDKs
- Provide those interfaces for every available platform and interface
- Guarantee consistency between those platforms
- Provide code examples for each interface
- Omit any internal implementation details which do not affect the public interface

## Consistency

The following will be kept consistent across platforms:

- Semantics
  - Naming and semantic meaning of names for modules, components, functions, events, etc.
- Features
  - Any functionality which is not not platform-specific
  - Certain features may be marked as 'not-implemented' on platforms where the interface exists, but has not yet been implemented by that platform's specific SDK
- Server compatibility
  - Any interfaces should be agnostic to the server/api platform used
  - Interfaces should also be designed to allow for the same server/api to be used in common between different client platforms

The following may vary between platforms:

- Packaging and installation
- Platform-specific features
  - For example, an iOS feature may be based on functionality only available on iOS
- Language conventions
  - Including casing, closures, and other language-specific best practices
- Platform-specific design and communication patterns

