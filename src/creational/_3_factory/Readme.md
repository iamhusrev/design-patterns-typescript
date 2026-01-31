Factory Method Pattern
🎯 Purpose
Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

🛠 Problem
Imagine you are building a logistics app. Initially, you only handle truck transportation. Your code is tightly coupled to the Truck class. Later, you add sea transportation (Ship). Now, your codebase is full of conditionals to check which vehicle to use.

🚀 Solution
The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. The objects are still created via the new operator, but it’s being called from within the factory method.

✅ Pros
Avoids Tight Coupling: You decouple the creator from the concrete products.

Single Responsibility Principle: You can move the product creation code into one place in the program.

Open/Closed Principle: You can introduce new types of products into the program without breaking existing client code.

❌ Cons
Complexity: The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern.