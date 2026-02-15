Flyweight Pattern
🎯 Purpose
Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

🛠 Problem
To create a realistic logistics map, you need to render thousands of truck icons. Each truck object contains data like brand, model, color, and a heavy imageTexture.
If you create 10,000 truck objects, and each one stores its own copy of the imageTexture, your browser or server will run out of RAM quickly.

🚀 Solution
The Flyweight pattern suggests that you stop storing the Intrinsic State (shared data like brand, image) inside the main object. Instead, you keep it in a separate Flyweight object.
The main object (Context) only stores the Extrinsic State (unique data like x, y coordinates) and a reference to the Flyweight.
A Factory manages these Flyweights to ensure that duplicates are not created.

✅ Pros
RAM Savings: You can save a significant amount of RAM, assuming your program has tons of similar objects.

❌ Cons
CPU Trade-off: You might be trading RAM for CPU cycles if some of the context data needs to be recalculated each time someone calls a flyweight method.

Code Complexity: The code becomes much more complicated. New team members might wonder why the state of an entity is separated in such a way.