import { Product } from "../interfaces/product.interface";

export type AddProductToListCallback = (id: string, size: string) => void;
export type UpdatePricesCallback = () => void;
export type RemoveProductCallback = (product: Product) => void;