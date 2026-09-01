import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideStore, provideState} from '@ngrx/store';
import { todoReducer } from '../Redux/ListaTareas/store/todo.reducer';
// import { themeReducer } from '../Redux/ModoOscuro/theme.reducer';
import { cartReduccer } from '../Redux/CarritoCompras/cart.reducer';
import { temaReducer } from '../Redux/TemaOscuro/tema.reducer';
import { authReducer } from '../Redux/Auth.State/auth.reducer';
import { contadorReducer } from '../Redux/contador/contador.reductor';
// import { contadorReducer } from '../Redux/contador/contador.reductor';
import { ClimaEspacialReducer } from './climaRedux/store/reducers/clima-redux.reducers';
import { provideEffects } from '@ngrx/effects';
import { ClimaEspacialEffects } from './climaRedux/store/effects/clima-redux.effects';
import { ViajeReduxReducer } from './viajesRedux/store/reducers/viajes.reducers';
import { ViajeReduxEffects } from './viajesRedux/store/effects/viajes.effects';
import { audioReducer } from './ac-Audio/store/reducers/audio.reducers';
import { AudioEffects } from './ac-Audio/store/effects/audio.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    //solo debe existir un provideStore, si se duplica puede generar error y omitir los demas parametros
    provideStore({
      contador: contadorReducer,
      cart: cartReduccer,
      auth: authReducer,
      todos: todoReducer,
      climaEspacial: ClimaEspacialReducer,
      viajeRedux:ViajeReduxReducer,
      audio: audioReducer,

    }),
    provideEffects([
      ClimaEspacialEffects,
      ViajeReduxEffects,
      AudioEffects,
    ]),

    provideState({name: 'todos', reducer: todoReducer}),
    // provideState({name: 'theme', reducer: themeReducer}),
    provideState({name: 'tema', reducer: temaReducer}),

    // provideState({name: 'climaEspacial', reducer: ClimaEspacialReducer}),
  ]
};
