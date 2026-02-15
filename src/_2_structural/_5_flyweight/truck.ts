import { TruckType } from "./truck-type.ts";

export class Truck {
    constructor(
        private x: number,
        private y: number,
        private type: TruckType // Reference to the shared object
    ) { }

    public draw(): void {
        this.type.draw(this.x, this.y);
    }
}