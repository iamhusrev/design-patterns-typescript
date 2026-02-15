import { TruckFactory } from "./truck-factory.ts";
import { Truck } from "./truck.ts";

const fleet: Truck[] = [];

function addTruckToFleet(
    x: number,
    y: number,
    brand: string,
    model: string,
    color: string
) {
    const type = TruckFactory.getTruckType(brand, model, color);
    const truck = new Truck(x, y, type);
    fleet.push(truck);
}

// Adding 5 trucks, but only creating 2 types in memory
addTruckToFleet(10, 20, "Mercedes", "Actros", "White");
addTruckToFleet(15, 25, "Mercedes", "Actros", "White"); // Reuses object
addTruckToFleet(20, 30, "Volvo", "FH16", "Black");
addTruckToFleet(25, 35, "Mercedes", "Actros", "White"); // Reuses object
addTruckToFleet(30, 40, "Volvo", "FH16", "Black");     // Reuses object

console.log(`\nTotal Trucks in Fleet: ${fleet.length}`);
console.log("Rendering...");
fleet.forEach(t => t.draw());