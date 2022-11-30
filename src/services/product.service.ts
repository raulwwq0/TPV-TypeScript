import products from "../assets/mocks/products.json";
import { Burger } from "../models/burger.model";
import { Drink } from "../models/drink.model";


export class ProductService {
    private _burgers: Burger[];
    private _drinks: Drink[] = [];

    constructor() {
        this._burgers = products.burgers.map(
            (burger: Burger) => new Burger(burger)
        );
        this._drinks = products.drinks.map((drink: Drink) => new Drink(drink));
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

    public createDrink = (id: string, size: string): Drink => {
        const drinkScheme = this._drinks.find((drink: Drink) =>
            id.includes(drink.id)
        );
        const drink = new Drink(drinkScheme);
        drink.quantity = 0;
        drink.size = size;
        return drink;
    };

    public get drinks(): Drink[] {
        return this._drinks;
    }

    public get burgers(): Burger[] {
        return this._burgers;
    }
}
