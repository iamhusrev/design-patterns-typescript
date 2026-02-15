import { ShippingDecorator } from "./shipping-decorator.js";

export class ExpressDecorator extends ShippingDecorator {
    public getCost(): number {
        // Add 20 for speed
        return super.getCost() + 20;
    }

    public getDescription(): string {
        return super.getDescription() + " + Express Delivery 🚀";
    }
}