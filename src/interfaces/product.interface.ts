import { Vat } from "../enums/vat.enum";

export interface Product {
    id: string;
    name: string;
    price: number;
    vat: Vat;
    image: string;
    quantity: number;
    size: string;
}
