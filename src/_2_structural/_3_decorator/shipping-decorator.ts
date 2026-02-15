import { ShippingService } from "./shipping-service.interface.ts";

export abstract class ShippingDecorator implements ShippingService {
    protected service: ShippingService;

    constructor(service: ShippingService) {
        this.service = service;
    }

    public getCost(): number {
        return this.service.getCost();
    }

    public getDescription(): string {
        return this.service.getDescription();
    }
}