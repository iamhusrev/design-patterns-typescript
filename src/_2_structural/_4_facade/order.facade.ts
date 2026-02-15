import { InventoryService } from "./subsystems/inventory.service.ts";
import { PaymentService } from "./subsystems/payment.service.ts";
import { NotificationService } from "./subsystems/notification.service.ts";

export class OrderFacade {
    private inventory: InventoryService;
    private payment: PaymentService;
    private notification: NotificationService;

    constructor() {
        // In a real app (like NestJS), these would be injected via Dependency Injection
        this.inventory = new InventoryService();
        this.payment = new PaymentService();
        this.notification = new NotificationService();
    }

    public placeOrder(productId: string, amount: number, userId: string): void {
        console.log("--- Facade: Starting Order Process ---");

        // 1. Check Stock
        if (!this.inventory.checkStock(productId)) {
            console.log("Order Failed: Out of Stock");
            return;
        }

        // 2. Process Payment
        if (!this.payment.processPayment(amount)) {
            console.log("Order Failed: Payment Error");
            return;
        }

        // 3. Send Confirmation
        this.notification.sendEmail(userId, "Your order has been placed!");

        console.log("--- Facade: Order Completed Successfully ---");
    }
}