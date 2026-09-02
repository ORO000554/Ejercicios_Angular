import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EstadoViajeRedux } from "../../models/viajes.model";

export const SeleccionarViajeReduxEstado = createFeatureSelector<EstadoViajeRedux>('viajeRedux');

export const seleccionarViajeSiCargando = createSelector(SeleccionarViajeReduxEstado, (state) => state?.loading ?? false);
export const seleccionarFiltroViajeActivo = createSelector(SeleccionarViajeReduxEstado, (state) => state?.filtroCostoSeleccionado ?? 'TODO');
export const seleccionarViajeFiltrado = createSelector(
  SeleccionarViajeReduxEstado,
  (state) =>{
    if(!state || !state.viajes){
      return [];
    }
    if(state?.filtroCostoSeleccionado === 'TODO'){
      return state.viajes;
    }

    return state.viajes.filter(v => v.Costo === state?.filtroCostoSeleccionado);
  }
);
export const seleccionarViajeFiltradoPorEstado = createSelector(
  SeleccionarViajeReduxEstado,
  (state) =>{
    if(!state|| !state.viajes)
      return [];
    if(state?.filtroEstadoSeleccionado === 'TODO'){
      return state.viajes;
    }
    return state.viajes.filter(v => v.estado === state?.filtroEstadoSeleccionado);
  }
);
export const seleccionarViajeFiltradoPorMedioTransporte = createSelector(
  SeleccionarViajeReduxEstado,
  (state) =>{
    if(!state|| !state.viajes)
      return [];
    if(state?.filtroMedioTransporteSeleccionado === 'TODO'){
      return state.viajes;
    }
    return state.viajes.filter(v => v.medioTransporte === state?.filtroMedioTransporteSeleccionado);
  }
);
