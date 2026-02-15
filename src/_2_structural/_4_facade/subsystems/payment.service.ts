export class PaymentService {
    processPayment(amount: number): boolean {
        console.log(`Payment: Charging $${amount}... Success 💳`);
        return true;
    }
}
