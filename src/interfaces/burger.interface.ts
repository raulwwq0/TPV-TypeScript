import { Ingredient } from "../types/ingredient.type";
import { Product } from "./product.interface";

export interface IBurger extends Product {
    ingredients: Ingredient[];
    gluten: boolean;
    vegetarian: boolean;
}
