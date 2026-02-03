import { ConfigManager } from "./ConfigManager";


const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

console.log(`Connection ID from config1: ${config1.getConnectionId()}`);
console.log(`Connection ID from config2: ${config2.getConnectionId()}`);

if (config1 === config2) {
    console.log("Both config1 and config2 reference the same instance.");
} else {
    console.log("config1 and config2 reference different instances.");
}