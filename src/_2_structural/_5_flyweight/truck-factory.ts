import { TruckType } from "./truck-type.ts";

export class TruckFactory {
    private static truckTypes: { [key: string]: TruckType } = {};

    public static getTruckType(brand: string, model: string, color: string): TruckType {
        const key = `${brand}-${model}-${color}`;

        if (!this.truckTypes[key]) {
            console.log(`Factory: Creating new truck type for ${key}`);
            this.truckTypes[key] = new TruckType(brand, model, color);
        } else {
            console.log(`Factory: Reusing existing truck type for ${key}`);
        }

        return this.truckTypes[key];
    }
}