# Structural Design Patterns Summary

Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient. They focus on how classes and objects are composed to form larger systems.

---

## 1. Adapter 🔌

**Purpose:** Allows objects with incompatible interfaces to collaborate by wrapping one of them in a special object (adapter).

**Use Case:** Integrating a legacy XML-based service into a new JSON-based system. Connecting third-party libraries with incompatible interfaces.

**Key Logic:** The adapter implements the target interface and holds a reference to the adaptee, delegating calls while translating between interfaces.

---

## 2. Bridge 🌉

**Purpose:** Splits a large class or a set of closely related classes into two separate hierarchies — abstraction and implementation — which can be developed independently.

**Use Case:** A `Shape` class with multiple `Color` variations. Cross-platform UI rendering where UI logic is separated from rendering engine.

**Key Logic:** Composition over inheritance. The abstraction holds a reference to the implementation and delegates the work to it.

---

## 3. Composite 🌳

**Purpose:** Lets you compose objects into tree structures to represent part-whole hierarchies. Allows treating individual objects and compositions of objects uniformly.

**Use Case:** File system (files and folders). UI component trees. Organization hierarchies.

**Key Logic:** A common interface for both leaf nodes and composite nodes. Composite nodes manage a collection of children and delegate operations to them.

---

## 4. Decorator 🎨

**Purpose:** Attaches new behaviors to objects by placing them inside special wrapper objects that contain the behaviors.

**Use Case:** Adding logging, caching, or compression to data streams. Extending UI component behavior without modifying the original class.

**Key Logic:** The decorator implements the same interface as the wrapped object and delegates calls to it while adding extra behavior before/after.

---

## 5. Facade 🏠

**Purpose:** Provides a simplified interface to a complex subsystem, library, or framework.

**Use Case:** A `VideoConversionFacade` that hides the complexity of codec libraries, bitrate converters, and audio mixers. Simplifying API access to complex third-party services.

**Key Logic:** A single class that exposes simple methods while internally coordinating multiple complex subsystem classes.

---

## 6. Flyweight 🪶

**Purpose:** Lets you fit more objects into the available amount of RAM by sharing common state among multiple objects instead of keeping all the data in each object.

**Use Case:** Rendering thousands of trees or particles in a game. Characters in a text editor sharing font and style metadata.

**Key Logic:** Separates the intrinsic state (shared, stored in the flyweight) from the extrinsic state (unique, passed in by the client at runtime).

---

## 7. Proxy 🛡️

**Purpose:** Provides a substitute or placeholder for another object. The proxy controls access to the original object, allowing you to perform something before or after the request reaches the original object.

**Use Case:** Lazy initialization of heavy objects. Access control (protection proxy). Caching remote service results (remote/cache proxy). Logging requests.

**Key Logic:** Implements the same interface as the real subject and holds a reference to it. Adds its own logic (access control, caching, logging) around the delegation.

---

## ⚖️ Comparison Table

| Pattern   | Focus                        | Main Benefit                                    |
|-----------|------------------------------|-------------------------------------------------|
| Adapter   | Interface compatibility      | Integrating incompatible interfaces             |
| Bridge    | Abstraction vs. Implementation | Independent evolution of hierarchies           |
| Composite | Part-whole hierarchy         | Uniform treatment of individual and group objects |
| Decorator | Dynamic behavior extension   | Adding responsibilities without subclassing     |
| Facade    | Simplified interface         | Reducing complexity of subsystem interaction    |
| Flyweight | Shared state                 | Memory optimization for large numbers of objects |
| Proxy     | Controlled access            | Lazy init, caching, logging, access control     |

---

## 🔗 Quick Reminder: How They Relate to Creational Patterns

> **Creational** patterns deal with *how objects are created*.
> **Structural** patterns deal with *how objects are assembled and composed*.
> **Behavioral** patterns deal with *how objects communicate and distribute responsibility*.