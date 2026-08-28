import { createAction, props } from "@ngrx/store";
import { SateliteTelemetria } from "../../model/clima-redux.model";
export const cargarTelemetria = createAction(
  '[Dashboard Clima Espacial] Cargar Telemetria'
);

export const cargarTelemetriaExito = createAction(
  '[API Clima Espacial] Cargar Telemetria Exito',
  props<{telemetria: SateliteTelemetria[] }>()

);

export const cargarTelemetriaError = createAction(
  '[API Clima Espacial] Cargar Telemetria Error',
  props<{error: string}>()
);

export const cambiarFiltroAlerta = createAction(
  '[Clima Espacial UI] Cambiar Filtro Alerta',
  props<{filtro: 'TODO' |'BAJO' |'MEDIO' | 'ALTO' |'CRITICO' }>()
)
