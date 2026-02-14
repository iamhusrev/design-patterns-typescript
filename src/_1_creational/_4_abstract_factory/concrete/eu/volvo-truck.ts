import { Vehicle } from "../../interfaces/vehicle";

export class VolvoTruck implements Vehicle {
    getCapacity() { return "20 Ton"; }
}