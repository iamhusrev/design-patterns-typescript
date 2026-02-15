import { Brand } from "./brand.interface.js";

export class Volvo implements Brand {
    getName(): string {
        return "Volvo";
    }
    engineStart(): void {
        console.log("Volvo Engine: Safety check passed. Rugged start!");
    }
}