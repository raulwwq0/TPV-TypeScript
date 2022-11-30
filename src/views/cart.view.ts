import { Product } from "../interfaces/product.interface";
import { ProductInList } from "../components/product-in-list.component";
import { RemoveProductCallback, UpdatePricesCallback } from "../types/callbacks.type";

export class CartView {

    private list: HTMLElement = document.querySelector('ul');
    private totalPrice: HTMLElement = document.querySelector('#totalPrice');
    private totalPriceWithVat: HTMLElement = document.querySelector('#totalPriceVat');

    constructor() {}

    public createProduct = (product: Product): void => {
        const productInList = new ProductInList(product);
        this.list.appendChild(productInList.render());
    }

    public removeProduct = (product: Product): void => {
        const productInList = this.list.querySelector(`[data-id="${product.id}-${product.size}"]`);
        this.list.removeChild(productInList);
    }

    public updateTotalPrices = (totalPrice: number, totalPriceWithVat: number): void => {
        this.totalPrice.textContent = totalPrice.toFixed(2).toString();
        this.totalPriceWithVat.textContent = totalPriceWithVat.toFixed(2).toString();
    }

    public updateQuantity = (product: Product): void => {
        const productInList = this.list.querySelector(`[data-id="${product.id}-${product.size}"]`); 
        const quantity = productInList.querySelector('#quantity');
        quantity.textContent = product.quantity.toString();
    }

    public bindQuantityButtons = (product: Product, callbackUpdatePrices: UpdatePricesCallback, callbackRemoveProduct: RemoveProductCallback): void => {
        const productInList = this.list.querySelector(`[data-id="${product.id}-${product.size}"]`);
        const addButton = productInList.querySelector('#addButton');
        const removeButton = productInList.querySelector('#removeButton');
        addButton.addEventListener('click', () => {
            product.quantity++;
            this.updateQuantity(product);
            callbackUpdatePrices();
        });
        removeButton.addEventListener('click', () => {
            product.quantity--;
            if (product.quantity > 0) {
                this.updateQuantity(product);
                callbackUpdatePrices();
            } else {
                callbackRemoveProduct(product);
            }
        });
    }
}