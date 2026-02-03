import { Ship } from "./Ship";
import { Truck } from "./Truck";

export abstract class Logistics {
    abstract createTransport(): any;

    planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    createTransport(): any {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    createTransport(): any {
        return new Ship();
    }
}