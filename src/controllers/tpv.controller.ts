import { ProductService } from "../services/product.service";
import { CardLayoutView } from "../views/card-layout.view";
import { CartView } from "../views/cart.view";
import { CartService } from "../services/cart.service";
import { Product } from "../interfaces/product.interface";

export class TpvController {
    constructor(
        private readonly cardLayoutView: CardLayoutView,
        private readonly productListView: CartView,
        private readonly productService: ProductService,
        private readonly productListService: CartService
    ) {
        this.cardLayoutView.createBurgerCards(this.productService.burgers);
        this.cardLayoutView.createDrinkCards(this.productService.drinks);
        this.cardLayoutView.bindAddButtons(this.handlerAddProductToCart);
    }

    private handlerAddProductToCart = (id: string, size: string): void => {
        const product: Product = this.productListService.findProduct(id, size);
        product ? this.updateProductInCart(product) : this.addProductToCart(id, size);       
    };

    private addProductToCart = (id: string, size: string): void => {
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


    private updateProductInCart = (product: Product): void => {
        product.quantity++;
        this.productListView.updateQuantity(product);
        this.productListView.updateTotalPrices(
            this.productListService.totalPrice,
            this.productListService.totalPriceWithVat
        );
    };

    private createProduct = (id: string, size: string): Product => {
        if (id.includes("B")) {
            return this.productService.createBurger(id, size);
        }

        if (id.includes("D")) {
            return this.productService.createDrink(id, size);
        }

        return {} as Product;
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
