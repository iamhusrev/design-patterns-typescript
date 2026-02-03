Singleton Pattern
🎯 Purpose
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

🛠 Problem
Sometimes you need a single instance of a class to control actions, such as a database connection, a logging service, or a configuration manager. A regular class allows anyone to create multiple objects, but a Singleton ensures that only one exists throughout the application's lifecycle.

🚀 Solution
Private Constructor: Prevents other objects from using the new operator with the Singleton class.

Static Field: A private static variable that holds the single instance.

Static Getter: A public static method that provides access to the instance, creating it if it doesn't exist (Lazy Initialization).

✅ Pros
Controlled Access: You can be sure that the instance is initialized only when it's first needed.

Reduced Memory Footprint: Since there's only one object, you save memory.

Global Access: The instance can be accessed from anywhere in the app without passing it around.

❌ Cons
Testing Difficulty: Since they introduce global state, they can be hard to unit test (mocking is difficult).

Violates Single Responsibility Principle: The pattern solves two problems at once (ensuring uniqueness and providing global access).

Concurrency: In multi-threaded environments (less of an issue in Node.js, but critical in Java/C#), special care is needed to prevent multiple threads from creating multiple instances.