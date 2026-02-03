Builder Pattern
🎯 Purpose
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

🛠 Problem
A class might have a monstrous constructor with a dozen parameters (known as the Telescoping Constructor problem). Most of these parameters might be optional, leading to ugly calls like: new Order("TR", "EU", null, null, true, false, null...)

🚀 Solution
The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders. The construction is performed by calling a series of steps on the builder object. You don't need to call all steps; only those necessary for a particular configuration of an object.

✅ Pros
Readability: Clearer code through method chaining.

Immutability: You can build an object and make it immutable once it's finished.

Step-by-Step: You can postpone construction steps or run steps recursively.

Single Responsibility Principle: You isolate complex construction code from business logic.

❌ Cons
Boilerplate: The overall complexity of the code increases since the pattern requires creating multiple new classes.