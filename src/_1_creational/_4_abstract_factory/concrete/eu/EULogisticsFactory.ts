import { LogisticsFactory } from "../../interfaces/LogisticFactory.js";
import { CMR } from "./CMR.js";
import { VolvoTruck } from "./VolvoTruck.js";

export class EULogisticsFactory implements LogisticsFactory {
    createVehicle() { return new VolvoTruck(); }
    createDocument() { return new CMR(); }
}