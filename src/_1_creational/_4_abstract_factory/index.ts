import { EULogisticsFactory } from "./concrete/eu/EULogisticsFactory";
import { TRLogisticsFactory } from "./concrete/tr/TRLogisticsFactory";
import { LogisticsFactory } from "./interfaces/LogisticFactory";


function startOperation(factory: LogisticsFactory) {
    const vehicle = factory.createVehicle();
    const document = factory.createDocument();

    console.log(`--- Logistics Report ---`);
    console.log(`Vehicle Capacity: ${vehicle.getCapacity()}`);
    console.log(`Paperwork: ${document.getType()}`);
}

// Running EU Operations
startOperation(new EULogisticsFactory());

// Running TR Operations
startOperation(new TRLogisticsFactory());