Bridge Pattern
🎯 Purpose
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—Abstraction and Implementation—which can be developed independently of each other.

🛠 Problem
Class Explosion (Cartesian Product Problem):
Imagine you have a Vehicle class.

You add subclasses: Truck, Van.

You add brands: Mercedes, Volvo.

You end up with: MercedesTruck, VolvoTruck, MercedesVan, VolvoVan.

If you add a new brand Scania, you need ScaniaTruck and ScaniaVan.

If you add a new vehicle Bus, you need MercedesBus, VolvoBus, ScaniaBus.

The code grows geometrically (VehicleTypes x Brands).

🚀 Solution
The Bridge pattern suggests that you switch from inheritance to object composition. You extract one of the dimensions (e.g., Brand) into a separate class hierarchy, so that the original classes (Vehicle) will reference an object of the new hierarchy instead of having all of its state and behaviors within one class.

Abstraction: The high-level control layer (Vehicle). It delegates work to the implementation.

Implementation: The low-level interface (Brand).

✅ Pros
Decoupling: You can develop the Abstraction and Implementation independently.

Open/Closed Principle: You can introduce new abstractions (e.g., Bus) and implementations (e.g., Tesla) without breaking existing code.

Single Responsibility Principle: High-level logic stays in the Abstraction; platform details stay in the Implementation.

❌ Cons
Complexity: Applying this pattern to a highly cohesive class might complicate the code unnecessarily if the dimensions rarely change.