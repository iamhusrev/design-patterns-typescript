Decorator Pattern
🎯 Purpose
Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

🛠 Problem
Imagine you have a Notification library that sends emails.

The client wants SMS notifications -> You create SMSNotifier.

The client wants Slack notifications -> You create SlackNotifier.

The client wants SMS AND Slack -> Do you create SMSAndSlackNotifier?

The client wants Email AND SMS AND Slack -> EmailAndSMSAndSlackNotifier?

This leads to a Class Explosion. Inheritance is static; you can't add functionality at runtime easily without creating a new subclass.

🚀 Solution
Use aggregation (composition) instead of inheritance. The pattern creates a Decorator class that wraps the original component. The decorator provides the same interface as the wrapped object, so the client doesn't know the difference.
You can stack multiple decorators on top of each other (like layers of an onion) to combine behaviors.

✅ Pros
Flexibility: You can extend an object's behavior without making a new subclass.

Runtime Changes: You can add or remove responsibilities from an object at runtime.

Single Responsibility Principle: You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

❌ Cons
Complexity: It's hard to remove a specific wrapper from the wrapper stack.

Order Dependency: It's hard to implement a decorator in such a way that its behavior doesn't depend on the order in the decorators stack.