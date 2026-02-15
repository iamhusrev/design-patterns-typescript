import { GpsTracker } from "./gps-tracker.interface.js";
import { RealGpsTracker } from "./real-gps-tracker.js";

export class SecureGpsProxy implements GpsTracker {
    private realTracker: RealGpsTracker;
    private userRole: string;

    constructor(userRole: string) {
        this.realTracker = new RealGpsTracker();
        this.userRole = userRole;
    }

    public getLocation(): string {
        console.log(`Proxy: Checking access for role '${this.userRole}'...`);

        if (this.userRole === "ADMIN" || this.userRole === "MANAGER") {
            console.log("Proxy: Access Granted. Fetching location...");
            return this.realTracker.getLocation();
        } else {
            return "Proxy: Access Denied! Insufficient permissions.";
        }
    }
}