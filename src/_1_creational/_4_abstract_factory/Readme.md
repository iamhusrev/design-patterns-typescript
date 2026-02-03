💻 Implementation Snippet
TypeScript
// The Client Code doesn't care about specific brands.
// It only knows the 'LogisticsFactory' interface.
function startOperation(factory: LogisticsFactory) {
    const vehicle = factory.createVehicle();
    const document = factory.createDocument();

    console.log(`Capacity: ${vehicle.getCapacity()}`);
    console.log(`Paperwork: ${document.getType()}`);
}

// Switching families is as easy as changing the Factory instance
startOperation(new EULogisticsFactory()); // Returns Volvo and CMR
startOperation(new TRLogisticsFactory()); // Returns Doblo and Irsaliye




✅ Pros
Consistency: You can be sure that the products you’re getting from a factory are compatible with each other.

Decoupling: You avoid tight coupling between concrete products and client code.

Open/Closed Principle: You can introduce new regional variants (e.g., USLogisticsFactory) without breaking existing code.

❌ Cons
Complexity: The code may become more complicated due to the high number of new interfaces and classes.