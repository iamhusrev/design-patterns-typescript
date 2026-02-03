import { Component } from "./Component";

export class Circle implements Component {
    public radius: number;
    public color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    clone(): Component {
        return new Circle(this.radius, this.color);
    }

    render(): void {
        console.log(`Rendering a ${this.color} circle with radius: ${this.radius}`);
    }
}