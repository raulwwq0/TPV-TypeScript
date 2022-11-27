import { Vat } from "../enums/vat.enum";
import { IDrink } from "../interfaces/drink.interface";

export class Drink implements IDrink {
    readonly _id: string;
    readonly _name: string;
    readonly _price: number;
    readonly _vat: Vat;
    readonly _image: string;
    readonly _sugar: boolean;
    _quantity: number = 0;
    _size: string = "S";

    constructor(drink: IDrink) {
        this._id = drink.id;
        this._name = drink.name;
        this._price = drink.price;
        this._vat = drink.vat;
        this._image = drink.image;
        this._sugar = drink.sugar;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get priceWithVat(): number {
        return this._price + this._price * this._vat;
    }

    public get vat(): Vat {
        return this._vat;
    }

    public get image(): string {
        return this._image;
    }

    public get sugar(): boolean {
        return this._sugar;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get size(): string {
        return this._size;
    }

    public set size(size: string) {
        this._size = size;
    }
}
