import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectThemeState = createFeatureSelector<boolean>('theme');

export const selectIsDarkMode = createSelector(
    selectThemeState,
    (isDark) => isDark
)