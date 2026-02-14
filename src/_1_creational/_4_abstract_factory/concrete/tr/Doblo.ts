import { Vehicle } from "../../interfaces/vehicle";

class Doblo implements Vehicle {
    getCapacity(): void {
        console.log("Doblo capacity is 750 kg");
    }
}

export { Doblo };