import { OrderFacade } from "./order.facade.js";

const orderSystem = new OrderFacade();

// The client performs a complex operation with a single line
orderSystem.placeOrder("iPhone 15", 999, "user@example.com");