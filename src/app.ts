import "../node_modules/reset-css/reset.css";
import { TpvController } from "./controllers/tpv.controller";
import { CardLayoutView } from "./views/card-layout.view";
import { ProductListView } from "./views/product-list.view";
import { BurgerService } from "./services/burger.service";
import { ProductListService } from "./services/product-list.service";
import { DrinkService } from "./services/drink.service";

const cardLayoutView = new CardLayoutView();
const productListView = new ProductListView();

const burgerService = new BurgerService();
const drinkService = new DrinkService();
const productListService = new ProductListService();

new TpvController(
    cardLayoutView,
    productListView,
    burgerService,
    drinkService,
    productListService
);
