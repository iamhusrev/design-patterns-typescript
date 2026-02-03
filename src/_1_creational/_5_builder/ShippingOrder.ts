export class ShippingOrder {
    public origin?: string;
    public destination?: string;
    public weight?: number;
    public isFragile: boolean = false;
    public isExpress: boolean = false;

    public displaySummary(): void {
        console.log(`--- Shipping Order Summary ---`);
        console.log(`From: ${this.origin} -> To: ${this.destination}`);
        console.log(`Weight: ${this.weight}kg | Fragile: ${this.isFragile} | Express: ${this.isExpress}`);
    }
}