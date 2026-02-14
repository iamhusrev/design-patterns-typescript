import { EULogisticsFactory } from "./concrete/eu/eu-logistics-factory";
import { TRLogisticsFactory } from "./concrete/tr/tr-logistics-factory";
import { LogisticsFactory } from "./interfaces/logisticFactory";


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