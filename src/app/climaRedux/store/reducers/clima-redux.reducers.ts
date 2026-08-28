import { createReducer, on } from "@ngrx/store";
import { EstadoClimaEspacial } from "../../model/clima-redux.model";
import * as ClimaEspacialActions from '../actions/clima-redux.actions';


export const EstadoInicialClimaEspacial: EstadoClimaEspacial ={
  telemetria: [],
  loading: false,
  error: null,
  filtroAlertaSeleccionada: 'TODO'
};

export const ClimaEspacialReducer = createReducer(
  EstadoInicialClimaEspacial,

  on(ClimaEspacialActions.cargarTelemetria, (state) =>({
    ...state,
    loading: true,
    error: null
  })),
  on(ClimaEspacialActions.cargarTelemetriaExito, (state, {telemetria}) =>({
    ...state,
    telemetria: telemetria,
    loading: false,
  })),
  on(ClimaEspacialActions.cargarTelemetriaError, (state, {error}) => ({
  ...state,
  loading: false,
  error,
  })),
  on(ClimaEspacialActions.cambiarFiltroAlerta, (state, { filtro}) =>({
    ...state,
    filtroAlertaSeleccionada: filtro
  }))
);
