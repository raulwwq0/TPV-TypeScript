import { MenuSize } from "../enums/menu-size.enum";
import { Product } from "../interfaces/product.interface";

export class ProductListService {
    private _productList: Product[] = [];
    private _totalPrice: number = 0;
    private _totalPriceWithVat: number = 0;

    public get productList(): Product[] {
        return this._productList;
    }

    public addProduct(product: Product): void {
        this._productList = [...this._productList, product];
    }

    public removeProduct(product: Product): void {
        const index = this._productList.indexOf(product);
        if (index > -1) {
            this._productList.splice(index, 1);
        }
    }

    public removeAllProducts(): void {
        this._productList.splice(0, this._productList.length);
    }

    public findProduct = (id: string, size: string): Product => {
        return this._productList.find(
            (product: Product) =>
                id.includes(product.id) && product.size === size
        );
    };

    public get totalPriceWithVat(): number {
        this._totalPriceWithVat = this._productList.reduce((total, product) => {
            return (
                total +
                (product.price + product.price * product.vat) *
                    MenuSize[product.size] *
                    product.quantity
            );
        }, 0);
        return this._totalPriceWithVat;
    }

    public get totalPrice(): number {
        this._totalPrice = this._productList.reduce((total, product) => {
            return (
                total +
                product.price * MenuSize[product.size] * product.quantity
            );
        }, 0);
        return this._totalPrice;
    }
}
