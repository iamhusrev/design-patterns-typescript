import { Transport } from "./Trasnport";

export class Truck implements Transport {
    deliver(): void {
        console.log("Deliver by land in a box");
    }
}