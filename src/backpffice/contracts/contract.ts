
export interface Contract {
    errors :[]
    validate (model:any): boolean
}