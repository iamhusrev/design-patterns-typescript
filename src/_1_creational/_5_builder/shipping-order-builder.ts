import { ShippingOrder } from "./shipping-order.js";

export class ShippingOrderBuilder {
    private order: ShippingOrder;

    constructor() {
        this.order = new ShippingOrder();
    }

    public setRoute(origin: string, destination: string): this {
        this.order.origin = origin;
        this.order.destination = destination;
        return this;
    }

    public setWeight(weight: number): this {
        this.order.weight = weight;
        return this;
    }

    public makeFragile(): this {
        this.order.isFragile = true;
        return this;
    }

    public makeExpress(): this {
        this.order.isExpress = true;
        return this;
    }

    public build(): ShippingOrder {
        // Validation can be performed here before returning
        if (!this.order.origin || !this.order.destination) {
            throw new Error("Shipping route is required!");
        }
        return this.order;
    }
}