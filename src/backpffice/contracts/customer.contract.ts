import { Flunt } from "src/utils/flunt";
import { Customer } from "../models/customer.model";
import { Contract } from "./contract";

export class createCustomerContract implements Contract {
    errors;

    validate(model: Customer): boolean {
       // throw new Error("Method not implemented.");
       const flunt = new Flunt();

       flunt.hasMinLen(model.name, 5, 'Nome inválido')
       flunt.isEmail(model.email, 'Email inválido')
       flunt.isFixedLen(model.document, 11, 'CPF inválido')
       flunt.hasMinLen(model.password, 6, 'Senha inválida')

       this.errors = flunt.errors
       return flunt.isValid();
    }

}