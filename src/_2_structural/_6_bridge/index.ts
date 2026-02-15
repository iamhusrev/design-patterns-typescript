import { Truck } from "./abstraction/truck.js";
import { Van } from "./abstraction/van.js";
import { Mercedes } from "./implementation/mercedes.js";
import { Volvo } from "./implementation/volvo.js";

// 1. A Mercedes Truck
const myTruck = new Truck(new Mercedes());
myTruck.drive();

// 2. A Volvo Van
const myVan = new Van(new Volvo());
myVan.drive();