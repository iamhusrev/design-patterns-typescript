Prototype Pattern
🎯 Purpose
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

🛠 Problem
Imagine you have an object, and you want to create an exact copy of it. You'd have to create a new object of the same class and go through all its fields, copying their values. However, some fields might be private and inaccessible from outside the object. Furthermore, you become dependent on the specific class of the object you are cloning.

🚀 Solution
The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface usually contains a single clone method.

In TypeScript, we use the clone() method to return a new instance with the same state (properties) as the current one.


✅ Pros
Class Independence: You can clone objects without coupling to their specific concrete classes.

Reduced Initialization: You can get rid of repeated initialization code in favor of cloning a pre-configured prototype.

Complex Object Creation: It’s easier to create complex objects by cloning an existing configured instance than building them from scratch.

❌ Cons
Circular References: Cloning complex objects that have circular references (objects pointing to each other) can be very tricky.

Deep vs Shallow Copy: You must decide whether the clone should perform a shallow copy (only top-level properties) or a deep copy (recursive cloning of nested objects).