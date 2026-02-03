import { LogisticsFactory } from "../../interfaces/LogisticFactory";
import { Doblo } from "./Doblo";
import { Irsaliye } from "./Irsaliye";


export class TRLogisticsFactory implements LogisticsFactory {
    createVehicle() { return new Doblo(); }
    createDocument() { return new Irsaliye(); }
}