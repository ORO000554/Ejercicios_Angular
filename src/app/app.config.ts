import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideStore, provideState} from '@ngrx/store';
import { contadorReducer } from '../Redux/contador.reductor';
import { todoReducer } from '../Redux/ListaTareas/todo.reducer';
import { themeReducer } from '../Redux/ModoOscuro/theme.reducer';
import { cartReduccer } from '../Redux/CarritoCompras/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideStore({contador: contadorReducer}),

    provideStore({
      cart: cartReduccer,
    }),
    provideState({name: 'todos', reducer: todoReducer}),
    provideState({name: 'theme', reducer: themeReducer}),
    
  ]
};
