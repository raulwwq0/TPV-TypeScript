import products from "../assets/mocks/products.json";
import { Burger } from "../models/burger.model";

export class BurgerService {
    private _burgers: Burger[];

    constructor() {
        this._burgers = products.burgers.map(
            (burger: Burger) => new Burger(burger)
        );
    }

    public createBurger = (id: string, size: string): Burger => {
        const burgerScheme = this._burgers.find((burger: Burger) =>
            id.includes(burger.id)
        );
        const burger = new Burger(burgerScheme);
        burger.quantity = 0;
        burger.size = size;
        return burger;
    };

    public get burgers(): Burger[] {
        return this._burgers;
    }
}
