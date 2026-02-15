Adapter Pattern
🎯 Purpose
Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a wrapper between two objects.

🛠 Problem
Imagine you are creating a logistics monitoring app. The app downloads weather data from multiple sources in XML format. You then migrate your app to use a new analytics library that only works with JSON data. You cannot change the 3rd party library, and rewriting your whole app to output JSON is too costly.

🚀 Solution
You create an Adapter. This is a special object that converts the interface of one object so that another object can understand it.

The adapter gets an interface compatible with one of the existing objects.

Using this interface, the existing object can safely call the adapter’s methods.

Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

✅ Pros
Single Responsibility Principle: You can separate the interface or data conversion code from the primary business logic of the program.

Open/Closed Principle: You can introduce new types of adapters into the program without breaking the existing client code, as long as they work through the target interface.

❌ Cons
Complexity: The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.