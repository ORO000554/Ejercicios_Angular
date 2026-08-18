import { createReducer, on} from "@ngrx/store";
import { estadoInicial } from "./theme.state";
import * as Actions from "./tema.actions";


export const temaReducer = createReducer(

    estadoInicial,


    //Se alterna el mmodo usando un operador ternarrio logico
    on(Actions.alternarModo, (state) => ({
        ...state,
        modo: state.modo === 'claro' ? 'oscuro' : 'claro'
    })),
)
on(Actions.cambiarColorAcento,(state, {color}) => ({
    ...(state || {}),
    colorAcento: color
})),

on(Actions.cargarTemaGuardado, (state, {modo, color}) => ({
    ...(state || {}),
    modo: modo,
    colorAcento: color
}))