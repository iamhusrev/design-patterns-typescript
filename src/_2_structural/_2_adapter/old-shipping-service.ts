
export class OldShippingService {
    public getStatus(xmlData: string): void {
        console.log(`Legacy System: Parsing XML data... ${xmlData}`);
        console.log(`Legacy System: Status found!`);
    }
}