import { Logistics, RoadLogistics, SeaLogistics } from "./Logistics";

function runLogistics(logistics: Logistics) {
    logistics.planDelivery();
}

console.log("App: Launched with RoadLogistics.");
runLogistics(new RoadLogistics());
runLogistics(new SeaLogistics());