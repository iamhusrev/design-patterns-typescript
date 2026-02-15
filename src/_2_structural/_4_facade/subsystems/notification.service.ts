export class NotificationService {
    sendEmail(userId: string, message: string): void {
        console.log(`Notification: Sending email to ${userId}: "${message}" 📧`);
    }
}