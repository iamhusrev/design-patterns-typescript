import { Transport } from "./trasnport";

export class Ship implements Transport {
    deliver(): void {
        console.log("Deliver by sea in a container");
    }
}