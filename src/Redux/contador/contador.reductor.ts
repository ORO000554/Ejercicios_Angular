import {createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reiniciar } from './contador.redux';

export const initialState = 0;

export const contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(reiniciar, () => 0 )

);
