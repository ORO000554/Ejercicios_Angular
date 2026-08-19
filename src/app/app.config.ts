import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideStore, provideState} from '@ngrx/store';
import { todoReducer } from '../Redux/ListaTareas/todo.reducer';
// import { themeReducer } from '../Redux/ModoOscuro/theme.reducer';
import { cartReduccer } from '../Redux/CarritoCompras/cart.reducer';
import { temaReducer } from '../Redux/TemaOscuro/tema.reducer';
import { authReducer } from '../Redux/Auth.State/auth.reducer';
import { contadorReducer } from '../Redux/contador/contador.reductor';
// import { contadorReducer } from '../Redux/contador/contador.reductor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    //solo de existir un provideStore, si se duplica puede generar error y omitir los demas parametros
    provideStore({
      contador: contadorReducer,
      cart: cartReduccer,
      auth: authReducer,
    }),

    provideState({name: 'todos', reducer: todoReducer}),
    // provideState({name: 'theme', reducer: themeReducer}),
    provideState({name: 'tema', reducer: temaReducer})

  ]
};
