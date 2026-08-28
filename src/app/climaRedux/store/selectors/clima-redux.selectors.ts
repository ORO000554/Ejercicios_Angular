import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EstadoClimaEspacial } from "../../model/clima-redux.model";



export const SeleccionarClimaEspacialEstado = createFeatureSelector<EstadoClimaEspacial>('climaEspacial');

export const seleccionarSiCargando = createSelector(SeleccionarClimaEspacialEstado, (state) => state?.loading ?? false);
export const seleccionarFiltroActivo = createSelector(SeleccionarClimaEspacialEstado, (state) => state?.filtroAlertaSeleccionada ?? 'TODO');

export const selecccionarTelemetriaFiltrada = createSelector(
  SeleccionarClimaEspacialEstado,
  (state) =>{
    if(!state || !state.telemetria){
      return [];
    }
    if(state?.filtroAlertaSeleccionada === 'TODO'){

      return state.telemetria;
    }
    return state.telemetria.filter(t => t.nivelRadiacion === state?.filtroAlertaSeleccionada);
  }
);
