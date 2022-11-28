import { Burger } from "../models/burger.model";
import { Ingredient } from "../types/ingredient.type";

export class BurgerCard {
    constructor(private readonly burger: Burger) {}
    render = () => {
        const burgerCard = document.createElement('form');
        burgerCard.classList.add('card');
        burgerCard.classList.add('burger-card');
        burgerCard.innerHTML = `
            ${this.addVegetarianStamp(this.burger.vegetarian)}
            ${this.addGlutenFreeStamp(this.burger.gluten)}
            <img src="${this.burger.image}" alt="Image of a ${this.burger.name}">
            <div class="product-data">
                <h2>${this.burger.name}</h2>
                <div class="size-and-price">
                    <div class="menu-size">
                        <p>Menu Size:</p>
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
                        <span>${this.burger.price.toFixed(2)}€</span>
                    </p>
                </div>
                <div class="ingredients">
                    <span>Ingredients:</span>
                    ${this.ingredientFormated(this.burger.ingredients)}
                </div>
                <div class="add-to-list-button" id="addButton" data-id="${this.burger.id}"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</div>
            </div>
        `;
        return burgerCard;
    }

    private addGlutenFreeStamp = (hasGluten: boolean): string => {
        if (hasGluten) {
            return "";
        }

        return `<img src="../assets/images/glutenfreestamp.png" alt="Gluten Free Stamp" class="stamp">`;
    }

    private addVegetarianStamp = (isVegetarian: boolean): string => {
        if (!isVegetarian) {
            return "";
        }

        return `<img src="../assets/images/vegetarianstamp.png" alt="Vegetarian Stamp" class="stamp">`;
    }

    private ingredientFormated = (ingredients: Ingredient[]): string => {
        return ingredients.map((ingredient) => ingredient.name).join(", ");
    }

}