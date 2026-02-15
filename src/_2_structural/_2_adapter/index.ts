import { TrackingSystem } from "./tracking-system.interface.js";
import { OldShippingService } from "./old-shipping-service.js";
import { XmlAdapter } from "./xml-adapter.js";

const shipmentId = "TR-12345";

// 1. Trying to use the old service directly (This would fail in a real strict system)
const oldService = new OldShippingService();
// oldService.track(shipmentId); // Error: Property 'track' does not exist!

// 2. Using the Adapter
const adapter: TrackingSystem = new XmlAdapter(oldService);

console.log("--- Client: Starting Tracking ---");
adapter.track(shipmentId);