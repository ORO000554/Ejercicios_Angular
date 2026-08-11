import { createReducer, on } from "@ngrx/store";
import { addProduct, removeProduct,clearCart, Product } from "./cart.actions";

export const initialStatte: Product[]= [];
export const cartReduccer = createReducer(
    initialStatte,
    on(addProduct, (state, {product}) => [...state, product]),
    on(removeProduct, (state, {id}) =>state.filter(item => item.id !== id)),

    on(clearCart, () => [])
);
