import { createReducer, on } from "@ngrx/store";
import { EstadoViajeRedux } from "../../models/viajes.model";
import * as ViajeReduxActions from '../actions/viajes.actions';

export const EstadoInicialViajeRedux: EstadoViajeRedux ={
  viajes: [],
  loading: false,
  error: null,
  filtroCostoSeleccionado: 'TODO',
  filtroEstadoSeleccionado: 'TODO',
  filtroMedioTransporteSeleccionado: 'TODO',
};

export const ViajeReduxReducer = createReducer(
  EstadoInicialViajeRedux,

  on(ViajeReduxActions.cargarViaje, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ViajeReduxActions.cargarViajeExito, (state, {viajes}) => ({
    ...state,
    viajes: viajes,
    loading: false,
  })),
  on(ViajeReduxActions.cargaViajeError, (state, {error}) =>({

    ...state,
    loading: false,
    error,
  })),
  on(ViajeReduxActions.cambiarFiltradoCosto, (state, { filtro}) => ({
    ...state,
    filtroCostoSeleccionado: filtro
  }) ),
  on(ViajeReduxActions.cambiarFiltradoEstado, (state, {filtro}) =>({
    ...state,
    filtroEstadoSeleccionado: filtro
  })),
  on(ViajeReduxActions.cambiarFiltroMedioTransporte, (state, {filtro}) =>({
    ...state,
    filtroMedioTransporteSeleccionado: filtro
  })),

);
