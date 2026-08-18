import { createAction, props } from "@ngrx/store";

export const alternarModo = createAction('[Tema] Alternar Modo Claro/Oscuro');

export const cambiarColorAcento = createAction(
    '[Tema] Cambiar Color Acento',
    props<{color: 'azul' | 'verde' | 'rojo'}>()
);

export const cargarTemaGuardado = createAction(
    '[Tema] Cargar Desde LocalStorage',
    props<{ modo: 'claro' | 'oscuro'; color: 'azul' | 'verde' | 'rojo'}>()
);