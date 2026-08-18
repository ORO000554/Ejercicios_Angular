import { createReducer, on } from "@ngrx/store";
import { addProduct, removeProduct,clearCart, Product, editProduct } from "./cart.actions";

export const initialStatte: Product[]= [];
export const cartReduccer = createReducer(
    initialStatte,
    on(addProduct, (state, {product}) => [...state, product]),
    on(removeProduct, (state, {id}) =>state.filter(item => item.id !== id)),
    on(editProduct, (state, {id, quantity}) => state.map(item => item.id === id ? {...item, quantity} : item)),

    on(clearCart, () => [])
);
