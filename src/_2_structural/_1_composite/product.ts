import { DeliveryItem } from "./delivery-item.interface.js";

export class Product implements DeliveryItem {
    constructor(
        private name: string,
        private price: number
    ) {}

    public getPrice(): number {
        return this.price;
    }
}