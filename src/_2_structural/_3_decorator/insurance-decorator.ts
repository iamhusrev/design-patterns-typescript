import { ShippingDecorator } from "./shipping-decorator.ts";

export class InsuranceDecorator extends ShippingDecorator {
    public getCost(): number {
        // Add 50 to the cost of whatever we are wrapping
        return super.getCost() + 50;
    }

    public getDescription(): string {
        return super.getDescription() + " + Full Insurance 🛡️";
    }
}

