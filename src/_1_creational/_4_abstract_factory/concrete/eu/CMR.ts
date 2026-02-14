import { Document } from "../../interfaces/document";


export class CMR implements Document {
    getType() { return "International CMR Document"; }
}