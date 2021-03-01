import { Party } from './partyModel';
import { Product } from './productModel';

export class Invoice {
    constructor(
        public id?: string,
        public party?: Party,
        public product?: Product[],
        // public inPartyName?: string,
        // public inPartyType?: string,
        // public inPhoneNumber?: string,
        // public inCity?: string,
        // public inState?: string,
        // public inPostalCode?: string,
        // public inItemName?: string,
        // public inItemType?: string,
        // public inSalesPrice?: number,
        // public inPurchasePrice?: number,
        // public inHsn?: string,
        // public inGst?: number,
        public inQuantity?: number,
        public inTotal?: number,
    ) { }
}
