import { Vat } from "../enums/vat.enum";
import { IBurger } from "../interfaces/burger.interface";
import { Ingredient } from "../types/ingredient.type";

export class Burger implements IBurger {
    readonly _id: string;
    readonly _name: string;
    readonly _price: number;
    readonly _vat: Vat;
    readonly _image: string;
    readonly _ingredients: Ingredient[];
    readonly _gluten: boolean;
    readonly _vegetarian: boolean;
    _quantity: number = 0;
    _size: string = "S";

    constructor(burger: IBurger) {
        this._id = burger.id;
        this._name = burger.name;
        this._price = burger.price;
        this._vat = burger.vat;
        this._image = burger.image;
        this._ingredients = burger.ingredients;
        this._gluten = burger.gluten;
        this._vegetarian = burger.vegetarian;
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

    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    public get gluten(): boolean {
        return this._gluten;
    }

    public get vegetarian(): boolean {
        return this._vegetarian;
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
