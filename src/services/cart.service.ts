import { MenuSize } from "../enums/menu-size.enum";
import { Product } from "../interfaces/product.interface";

type Id = string;

export class CartService {
    private _productList = new Map<Id, Product>();
    private _totalPrice: number = 0;
    private _totalPriceWithVat: number = 0;

    public get productList(): Map<Id, Product> {
        return this._productList;
    }

    public addProduct(product: Product): void {
        this._productList.set(`${product.id}-${product.size}`, product);
    }

    public removeProduct(product: Product): void {
        this._productList.delete(`${product.id}-${product.size}`);
    }

    public removeAllProducts(): void {
        this._productList.clear();
    }

    public findProduct = (id: string, size: string): Product => {
        return this._productList.get(`${id}-${size}`)!;
    };

    public get totalPriceWithVat(): number {
        const productList = Array.from(this._productList.values());
        this._totalPriceWithVat = productList.reduce((total, product) => {
            return (
                total +
                product.price *
                MenuSize[product.size as keyof typeof MenuSize] *
                product.quantity *
                (1 + product.vat)
            );
        }, 0);
        return this._totalPriceWithVat;        
    }

    public get totalPrice(): number {
        const productList = Array.from(this._productList.values());
        this._totalPrice = productList.reduce((total, product) => {
            return (
                total +
                product.price *
                MenuSize[product.size as keyof typeof MenuSize] *
                product.quantity
            );
        }, 0);
        return this._totalPrice;
    }
}
