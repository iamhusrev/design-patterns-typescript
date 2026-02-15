import { Brand } from "../implementation/brand.interface.js";

export abstract class Vehicle {
    // The Bridge: We hold a reference to the implementation
    constructor(protected brand: Brand) { }

    abstract drive(): void;
}