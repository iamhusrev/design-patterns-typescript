
export interface Component {
    clone(): Component;
    render(): void;
}