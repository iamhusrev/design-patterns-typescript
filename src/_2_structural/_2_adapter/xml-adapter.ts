import { TrackingSystem } from "./tracking-system.interface.ts";
import { OldShippingService } from "./old-shipping-service.ts";

export class XmlAdapter implements TrackingSystem {
    private legacyService: OldShippingService;

    constructor(legacyService: OldShippingService) {
        this.legacyService = legacyService;
    }

    public track(shipmentId: string): void {
        // 1. Convert the data to the format the Adaptee needs
        const xmlPayload = `<shipment_id>${shipmentId}</shipment_id>`;

        console.log("Adapter: Converting ID to XML...");

        // 2. Call the Adaptee
        this.legacyService.getStatus(xmlPayload);
    }
}