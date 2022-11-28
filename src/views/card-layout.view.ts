import { Burger } from "../models/burger.model";
import { Drink } from "../models/drink.model";
import { BurgerCard } from "../components/burger-card.component";
import { DrinkCard } from "../components/drink-card.component";
import { AddProductToListCallback } from "../types/callbacks.type";

export class CardLayoutView {
    private cardLayout: HTMLElement = document.querySelector("#cardLayout");
    private addButtons: NodeListOf<HTMLElement>;

    constructor() {}

    public createBurgerCards = (burgers: Burger[]): void => {
        for (const burger of burgers) {
            const card = new BurgerCard(burger);
            this.cardLayout.appendChild(card.render());
        }
        this.addButtons = document.querySelectorAll("#addButton");
    };

    public createDrinkCards = (drinks: Drink[]): void => {
        for (const drink of drinks) {
            const card = new DrinkCard(drink);
            this.cardLayout.appendChild(card.render());
        }
        this.addButtons = document.querySelectorAll("#addButton");
    };

    public bindAddButtons = (callback: AddProductToListCallback): void => {
        this.addButtons.forEach((addButton) =>
            addButton.addEventListener("click", () => {
                const id = addButton.dataset.id;
                const sizeRadioButton: HTMLInputElement =
                    addButton.parentElement.querySelector(
                        'input[name="size"]:checked'
                    );
                const size = sizeRadioButton.value;
                callback(id, size);
            })
        );
    };
}
