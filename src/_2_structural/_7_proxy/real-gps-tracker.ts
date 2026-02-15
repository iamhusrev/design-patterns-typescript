import { GpsTracker } from "./gps-tracker.interface.js";

export class RealGpsTracker implements GpsTracker {
    public getLocation(): string {
        // Imagine this connects to a hardware sensor
        return "39.9334° N, 32.8597° E (Ankara, TR)";
    }
}