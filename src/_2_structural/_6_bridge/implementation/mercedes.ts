import { Brand } from "./brand.interface.js";

export class Mercedes implements Brand {
    getName(): string {
        return "Mercedes-Benz";
    }
    engineStart(): void {
        console.log("Mercedes Engine: Silent and smooth start...");
    }
}