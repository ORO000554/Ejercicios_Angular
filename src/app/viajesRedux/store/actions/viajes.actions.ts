import { createAction, props } from "@ngrx/store";
import { ViajeReduxService } from "../../services/viajes-redux.service";
import { ViajesRedux } from "../../models/viajes.model";


export const cargarViaje = createAction(
  '[Dashboard Viajes] Cargar Viajes'
);
export const cargarViajeExito = createAction(
  '[API Viajes] Cargar Viajes Exito',
  props<{viajes: ViajesRedux[]}>()
);
export const cargaViajeError = createAction(
  '[API Viajes] Cargar Viajes Error',
  props<{error: string}>()
);
export const cambiarFiltradoCosto = createAction(
  '[Viaje Redux UI] Cambiar Filtro Viaje',
  props<{filtro: 'TODO' | 'BARATO' | 'CARO' | 'PREMIUM'}>()
)
export const cambiarFiltradoEstado = createAction(
  '[Viaje Redux UI] Camiar Filtro Estado',
  props<{filtro: 'TODO' | 'Pendiente' | 'En proceso' | 'Completado' | 'Cancelado'}>()
)
export const cambiarFiltroMedioTransporte = createAction(
  '[Viaje Redux UI] Cambiar Filtro Medio Transporte',
  props<{filtro: 'TODO' | 'Avion' | 'Tren' | 'Bus' | 'Auto' | 'Barco'}>()
)
