import { Vehicle } from "./vehicle.js";

export class Truck extends Vehicle {
    drive(): void {
        console.log(`--- Starting Truck Sequence ---`);
        this.brand.engineStart();
        console.log(`Driving a heavy ${this.brand.getName()} Truck.`);
    }
}