import { LogisticsFactory } from "../../interfaces/logisticFactory";
import { Doblo } from "./doblo";
import { Irsaliye } from "./irsaliye";


export class TRLogisticsFactory implements LogisticsFactory {
    createVehicle() { return new Doblo(); }
    createDocument() { return new Irsaliye(); }
}