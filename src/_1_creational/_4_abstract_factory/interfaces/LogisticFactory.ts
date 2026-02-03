import { Vehicle } from "./Vehicle";
import { Document } from "./Document";

export interface LogisticsFactory {
    createVehicle(): Vehicle;
    createDocument(): Document;
}