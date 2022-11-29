import { BurgerService } from "../services/burger.service";
import { DrinkService } from "../services/drink.service";
import { CardLayoutView } from "../views/card-layout.view";
import { ProductListView } from "../views/product-list.view";
import { ProductListService } from "../services/product-list.service";
import { Product } from "../interfaces/product.interface";

export class TpvController {
    constructor(
        private readonly cardLayoutView: CardLayoutView,
        private readonly productListView: ProductListView,
        private readonly burgerService: BurgerService,
        private readonly drinkService: DrinkService,
        private readonly productListService: ProductListService
    ) {
        this.cardLayoutView.createBurgerCards(this.burgerService.burgers);
        this.cardLayoutView.createDrinkCards(this.drinkService.drinks);
        this.cardLayoutView.bindAddButtons(this.handlerAddProductToList);
    }

    private handlerAddProductToList = (id: string, size: string): void => {
        const product: Product = this.productListService.findProduct(id, size);
        product ? this.updateProductInList(product) : this.addProductToList(id, size);       
    };

    private addProductToList = (id: string, size: string): void => {
        const product = this.createProduct(id, size);

        if (product.quantity === 0 || product.size !== size) {
            product.quantity++;
            product.size = size;
            this.productListService.addProduct(product);
            this.productListView.createProduct(product);
            this.productListView.updateTotalPrices(
                this.productListService.totalPrice,
                this.productListService.totalPriceWithVat
            );
            this.productListView.bindQuantityButtons(
                product,
                this.handlerUpdatePrices,
                this.handlerRemoveProduct
            );
        }
    }


    private updateProductInList = (product: Product): void => {
        product.quantity++;
        this.productListView.updateQuantity(product);
        this.productListView.updateTotalPrices(
            this.productListService.totalPrice,
            this.productListService.totalPriceWithVat
        );
    };

    private createProduct = (id: string, size: string): Product => {
        if (id.includes("B")) {
            return this.burgerService.createBurger(id, size);
        }

        if (id.includes("D")) {
            return this.drinkService.createDrink(id, size);
        }

        return null;
    };

    private handlerUpdatePrices = (): void => {
        this.productListView.updateTotalPrices(
            this.productListService.totalPrice,
            this.productListService.totalPriceWithVat
        );
    };

    private handlerRemoveProduct = (product: Product): void => {
        this.productListView.removeProduct(product);
        this.productListService.removeProduct(product);
        this.productListView.updateTotalPrices(
            this.productListService.totalPrice,
            this.productListService.totalPriceWithVat
        );
    };
}
