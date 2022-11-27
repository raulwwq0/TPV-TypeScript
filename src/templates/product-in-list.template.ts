import { Product } from "../interfaces/product.interface";
import { MenuSize } from "../enums/menu-size.enum";

export class ProductInList {
    constructor(private readonly product: Product) {}

    public render = (): HTMLElement => {
        const sizeMultiplier = MenuSize[this.product.size];
        const productInList = document.createElement("li");
        productInList.classList.add("product-in-list");
        productInList.setAttribute(
            "data-id",
            `${this.product.id}-${this.product.size}`
        );
        productInList.innerHTML = `
            <p>${this.product.name}</p>
            <p>${this.product.size}</p>
            <p>${(this.product.price * sizeMultiplier).toFixed(2)}€</p>
            <p>${(
                (this.product.price + this.product.price * this.product.vat) *
                sizeMultiplier
            ).toFixed(2)}€</p>
            <div class="quantity-wrapper">
                <div class="add-button" id="addButton"><i class="fa-solid fa-plus"></i></div>
                <p id="quantity">${this.product.quantity}</p>
                <div class="remove-button" id="removeButton"><i class="fa-solid fa-minus"></i></div>
            </div>
        `;

        return productInList;
    };
}
