import { LogisticsFactory } from "../../interfaces/logisticFactory.js";
import { CMR } from "./cmr.js";
import { VolvoTruck } from "./volvo-truck.js";

export class EULogisticsFactory implements LogisticsFactory {
    createVehicle() { return new VolvoTruck(); }
    createDocument() { return new CMR(); }
}