import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "./cart.actions";


export const selectCartState = createFeatureSelector<Product[]>('cart');
export const selectCartItems = createSelector(selectCartState, (cart) => cart);
export const selectCartCount = createSelector(selectCartState, (cart) => cart.length);

export const selectCartTotal = createSelector(
    selectCartState,
    (cart) => cart.reduce((acumulado, producto) => acumulado + producto.price, 0)
);