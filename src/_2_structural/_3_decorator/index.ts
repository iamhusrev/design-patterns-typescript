import { BasicShipping } from "./basic-shipping.js";
import { InsuranceDecorator } from "./insurance-decorator.js";
import { ExpressDecorator } from "./express-decorator.js";

// 1. Simple Order
let myOrder = new BasicShipping();
console.log(`${myOrder.getDescription()} = $${myOrder.getCost()}`);
// Output: Standard Shipping = $100

// 2. Add Insurance (Wrap it)
myOrder = new InsuranceDecorator(myOrder);
console.log(`${myOrder.getDescription()} = $${myOrder.getCost()}`);
// Output: Standard Shipping + Full Insurance 🛡️ = $150

// 3. Add Express (Wrap it again)
myOrder = new ExpressDecorator(myOrder);
console.log(`${myOrder.getDescription()} = $${myOrder.getCost()}`);
// Output: Standard Shipping + Full Insurance 🛡️ + Express Delivery 🚀 = $170


// Summary
myOrder = new ExpressDecorator(new InsuranceDecorator(new BasicShipping()));
console.log(`${myOrder.getDescription()} = $${myOrder.getCost()}`);