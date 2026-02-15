import { SecureGpsProxy } from "./secure-gps-proxy.js";

// Scenario 1: A Driver tries to access location (Denied)
const driverProxy = new SecureGpsProxy("DRIVER");
console.log(`Driver sees: ${driverProxy.getLocation()}`);
// Output: Access Denied!

console.log("-".repeat(20));

// Scenario 2: An Admin tries to access location (Granted)
const adminProxy = new SecureGpsProxy("ADMIN");
console.log(`Admin sees: ${adminProxy.getLocation()}`);
// Output: 39.9334° N, 32.8597° E