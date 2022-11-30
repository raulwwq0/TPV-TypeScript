import "../node_modules/reset-css/reset.css";
import { TpvController } from "./controllers/tpv.controller";
import { CardLayoutView } from "./views/card-layout.view";
import { CartView } from "./views/cart.view";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";

const cardLayoutView = new CardLayoutView();
const productListView = new CartView();

const productService = new ProductService();
const productListService = new CartService();

new TpvController(
    cardLayoutView,
    productListView,
    productService,
    productListService
);
