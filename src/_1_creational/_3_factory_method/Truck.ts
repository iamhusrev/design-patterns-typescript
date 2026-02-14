import { Transport } from "./trasnport";

export class Truck implements Transport {
    deliver(): void {
        console.log("Deliver by land in a box");
    }
}