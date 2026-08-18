import { createAction, props } from "@ngrx/store";

export interface Product { id: number; name: string; price: number; quantity?: number}

export const addProduct = createAction('[Catalogo] Add Product', props<{product: Product}>());
export const removeProduct = createAction('[Cart] Remove Product', props<{id: number}>());
export const editProduct = createAction('[Cart] Edit Product', props<{id: number; quantity: number}>());
export const clearCart = createAction('[Cart] Clear Cart');
