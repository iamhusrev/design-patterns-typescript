import { Component } from "./component.interface";

export class ContextMenu {
    duplicate(component: Component): Component {
        const newComponent = component.clone();
        return newComponent;
    }
}