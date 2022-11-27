import { Drink } from "../models/drink.model";

export class DrinkCard {
    constructor(private readonly drink: Drink) {}

    render = () => {
        const drinkCard = document.createElement("form");
        drinkCard.classList.add("card");
        drinkCard.classList.add("drink-card");
        drinkCard.innerHTML = `
            ${this.addSugarFreeStamp(this.drink.sugar)}
            <img src="${this.drink.image}" alt="Image of a ${this.drink.name}">
            <div class="product-data">
                <h2>${this.drink.name}</h2>
                <div class="size-and-price">
                <div class="menu-size">
                    <p>Menu Size</p>
                    <span class="menu-option-wrapper">
                        <input type="radio" id="menuSizeS" name="size" value="S" checked> <label for="menuSizeS">S</label>
                    </span>
                    <span class="menu-option-wrapper">
                        <input type="radio" id="menuSizeM" name="size" value="M"> <label for="menuSizeM">M</label>
                    </span>
                    <span class="menu-option-wrapper">
                        <input type="radio" id="menuSizeL" name="size" value="L"> <label for="menuSizeL">L</label>
                    </span>
                </div>
                <p class="price">
                    Base Price:
                    <span>${this.drink.price.toFixed(2)}€</span>
                </p>
                </div>
                <div class="add-to-list-button" id="addButton" data-id="${
                    this.drink.id
                }"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</div>
            </div>
        `;
        return drinkCard;
    };

    private addSugarFreeStamp = (hasSugar: boolean): string => {
        if (hasSugar) {
            return "";
        }

        return `<img src="../assets/images/sugarfreestamp.png" alt="Sugar Free Stamp" class="stamp">`;
    };
}
