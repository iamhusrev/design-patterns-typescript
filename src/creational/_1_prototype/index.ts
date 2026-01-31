import { Circle } from "./Circle";
import { ContextMenu } from "./ContextMenu";

// 1. Bir tane "prototip" oluşturuyoruz (Mavi büyük bir daire)
const prototypeBlueCircle = new Circle(100, "Blue");

const contextMenu = new ContextMenu();

const circle1 = contextMenu.duplicate(prototypeBlueCircle) as Circle;
const circle2 = contextMenu.duplicate(prototypeBlueCircle) as Circle;

circle2.color = "Red";

prototypeBlueCircle.render(); // Blue
circle1.render();            // Blue
circle2.render();            // Red (Sadece bu değişti)