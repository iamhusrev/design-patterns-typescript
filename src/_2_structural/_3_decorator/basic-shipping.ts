import { ShippingService } from "./shipping-service.interface.js";

export class BasicShipping implements ShippingService {
    public getCost(): number {
        return 100; // Base price
    }

    public getDescription(): string {
        return "Standard Shipping";
    }
}