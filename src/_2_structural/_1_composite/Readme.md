Composite Pattern
🎯 Purpose
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

🛠 Problem
Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

For example, imagine you have two types of objects: Products and Boxes. A Box can contain several Products as well as a number of smaller Boxes. These little Boxes can also hold some Products or even smaller Boxes, and so on.

Trying to calculate the total price creates a recursive nightmare if you treat Boxes and Products as different classes.

🚀 Solution
The Composite pattern suggests that you work with Products and Boxes through a common interface which declares a method for calculating the total price.

For a Product: It simply returns the product’s price.

For a Box: It goes over each item the box contains, asks its price, and then returns a total for this box.

✅ Pros
Simplifies Client Code: You can treat simple and complex elements uniformly. You don't need if (item instanceof Box) checks.

Open/Closed Principle: You can introduce new element types into the app without breaking existing code, which now works with the object tree.

❌ Cons
Overgeneralization: It might make the design overly general. It is harder to restrict the type of components of a composite (e.g., if you want a specific Box to only hold Products, not other Boxes, the type system won't stop you easily).