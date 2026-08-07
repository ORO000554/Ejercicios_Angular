import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {provideStore} from '@ngrx/store';
import { contadorReducer } from '../Redux/contador.reductor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideStore({contador: contadorReducer})
  ]
};
