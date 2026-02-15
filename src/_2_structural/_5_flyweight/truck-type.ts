
export class TruckType {
    constructor(
        private brand: string,
        private model: string,
        private color: string
    ) { }

    public draw(x: number, y: number): void {
        console.log(
            `Drawing 🚚 ${this.brand} ${this.model} (${this.color}) at coordinates [${x}, ${y}]`
        );
    }
}