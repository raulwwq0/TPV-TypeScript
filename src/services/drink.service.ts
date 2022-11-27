import products from "../assets/mocks/products.json";
import { Drink } from "../models/drink.model";

export class DrinkService {
    private _drinks: Drink[] = [];

    constructor() {
        this._drinks = products.drinks.map((drink: Drink) => new Drink(drink));
    }

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
}
