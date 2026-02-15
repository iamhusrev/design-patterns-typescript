Proxy Pattern
🎯 Purpose
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

🛠 Problem
Why would you want to control access to an object?

Security: You have a massive object that handles sensitive data (e.g., GPS Logs, Payment Details). You need to ensure only authorized users can access it.

Performance (Lazy Loading): You have a heavy object (e.g., a massive 3D model of a city) that consumes a lot of system resources. You don't want to load it until it is actually requested.

🚀 Solution
Create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it (if the security check passes).

✅ Pros
Control: You can control the service object without clients knowing about it.

Lifecycle Management: You can manage the lifecycle of the real object (load it only when needed).

Security: Perfect for implementing access control rules.

❌ Cons
Complexity: The code may become more complicated since you need to introduce new classes.

Latency: The response from the service might get delayed because of the extra layer (the proxy).