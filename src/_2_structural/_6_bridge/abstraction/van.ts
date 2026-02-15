import { Vehicle } from "./vehicle.js";

export class Van extends Vehicle {
    drive(): void {
        console.log(`--- Starting Van Sequence ---`);
        this.brand.engineStart();
        console.log(`Driving a compact ${this.brand.getName()} Van for deliveries.`);
    }
}