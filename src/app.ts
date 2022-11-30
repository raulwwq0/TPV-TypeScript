import "../node_modules/reset-css/reset.css";
import { TpvController } from "./controllers/tpv.controller";
import { CardLayoutView } from "./views/card-layout.view";
import { ProductListView } from "./views/product-list.view";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";

const cardLayoutView = new CardLayoutView();
const productListView = new ProductListView();

const productService = new ProductService();
const productListService = new CartService();

new TpvController(
    cardLayoutView,
    productListView,
    productService,
    productListService
);
