import { ShippingOrderBuilder } from "./shipping-order-builder.js";

const expressOrder = new ShippingOrderBuilder()
    .setRoute("Ankara", "Istanbul")
    .setWeight(15)
    .makeExpress()
    .makeFragile()
    .build();

expressOrder.displaySummary();

const standardOrder = new ShippingOrderBuilder()
    .setRoute("Izmir", "Bursa")
    .setWeight(50)
    .build();

standardOrder.displaySummary();