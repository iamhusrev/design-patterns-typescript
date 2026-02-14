import { Vehicle } from "./vehicle";
import { Document } from "./document";

export interface LogisticsFactory {
    createVehicle(): Vehicle;
    createDocument(): Document;
}