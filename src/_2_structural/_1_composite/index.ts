import { Box } from "./box.js";
import { Product } from "./product.js";

// 1. Create simple products (Leafs)
const phone = new Product("iPhone 15", 1000);
const charger = new Product("Charger", 50);
const headphones = new Product("AirPods", 200);
const warrantyCard = new Product("Warranty", 0);

// 2. Create a small box for accessories (Composite)
const accessoriesBox = new Box();
accessoriesBox.add(charger);
accessoriesBox.add(headphones);

// 3. Create a main shipment box (Composite)
const mainShipment = new Box();
mainShipment.add(phone);
mainShipment.add(accessoriesBox); // Adding a box inside a box
mainShipment.add(warrantyCard);

// 4. Calculate total price
console.log(`Total Price: $${mainShipment.getPrice()}`);