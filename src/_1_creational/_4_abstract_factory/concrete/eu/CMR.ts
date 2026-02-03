import { Document } from "../../interfaces/Document";


export class CMR implements Document {
    getType() { return "International CMR Document"; }
}