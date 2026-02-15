export class InventoryService {
    checkStock(productId: string): boolean {
        console.log(`Inventory: Checking stock for ${productId}... OK ✅`);
        return true;
    }
}