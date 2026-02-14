import { DeliveryItem } from "./delivery-item.interface.js";

export class Box implements DeliveryItem {
    private children: DeliveryItem[] = [];

    public add(item: DeliveryItem): void {
        this.children.push(item);
    }

    public remove(item: DeliveryItem): void {
        const index = this.children.indexOf(item);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    public getPrice(): number {
        // Recursive magic: loops through children and asks their price
        return this.children.reduce((total, child) => total + child.getPrice(), 0);
    }
}