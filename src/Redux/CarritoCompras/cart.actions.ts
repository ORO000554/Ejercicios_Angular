import { createAction, props } from "@ngrx/store";

export interface Product { id: number; name: string; price: number;}

export const addProduct = createAction('[Catalogo] Add Product', props<{product: Product}>());
export const removeProduct = createAction('[Cart] Remove Product', props<{id: number}>());
export const clearCart = createAction('[Cart] Clear Cart');
 