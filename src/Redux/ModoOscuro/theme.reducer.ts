import { createReducer, on} from '@ngrx/store';
import { toggleTheme } from './theme.actions';

export const initialState =false; //false = Claro,  true= Oscuro

export const themeReducer = createReducer(
    initialState,
    //Al reciir 'toggleTheme', regresamos lo opuesto de lo que se habia uttilizado '!'
    on(toggleTheme, (state) => !state)
);