import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TemaState } from './theme.state';


export const selectThemeFeature = createFeatureSelector<TemaState>('tema');

export const selectEsModoOscuro = createSelector(
    selectThemeFeature,
    (state) => state.modo === 'oscuro'
);

export const selectClaseColor = createSelector(
    selectThemeFeature,
    (state) => `acento-${state.colorAcento}`
);
