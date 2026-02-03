Creational Design Patterns Summary
Creational design patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

1. Singleton 🦄
Purpose: Ensures that a class has only one instance and provides a global point of access to it.

Use Case: Database connections, Logger services, Configuration settings.

Key Logic: Private constructor and a static method to get the instance.

2. Factory Method 🏭
Purpose: Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

Use Case: Logistics apps (delivering via Truck or Ship), UI libraries (creating different button types).

Key Logic: Subclasses decide which concrete class to instantiate.

3. Abstract Factory 🏗️
Purpose: Lets you produce families of related objects without specifying their concrete classes.

Use Case: Cross-platform UI components (Mac Button + Mac Scrollbar vs. Windows Button + Windows Scrollbar).

Key Logic: A "Factory of Factories."

4. Builder 👷
Purpose: Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

Use Case: Building a complex Computer object or a Pizza with many optional ingredients.

Key Logic: Method chaining (.addPartA().addPartB().build()).

5. Prototype 🐑
Purpose: Lets you copy existing objects without making your code dependent on their classes.

Use Case: Cloning an enemy in a game with the same stats, or duplicating a complex stateful object.

Key Logic: Implementing a clone() method.

⚖️ Comparison Table
Pattern	Focus	Main Benefit
Singleton	Uniqueness	Resource management & Shared state
Factory Method	Choice of class	Decoupling & Extensibility
Abstract Factory	Families of classes	Consistency across related products
Builder	Step-by-step construction	Readability & Managing complexity
Prototype	Cloning state	Performance & Avoiding costly creation