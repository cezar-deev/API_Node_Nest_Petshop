import { Address } from "./address.model";
import { CreditCard } from "./credit-card.model";
import { Pet } from "./pet.model";

export class Customer {
    constructor(
        public name : string,
        public document : string,
        public email : string,
        public pets: Pet [],
        public billingAdress: Address,
        public shippingAddress: Address,
        public creditcard: CreditCard,
        public password : string,
        public active : boolean,
    ) {
        
    }
}