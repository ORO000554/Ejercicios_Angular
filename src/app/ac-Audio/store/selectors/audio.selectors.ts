import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EstadoAudio } from "../../model/audio.model";


export const seleccionarEstadoAudio = createFeatureSelector<EstadoAudio>('audio');

export const seleccionarAudioConfiguracion = createSelector(seleccionarEstadoAudio, (state) => state.configuracion);
export const seleccionarMicrofonoEstado = createSelector(seleccionarEstadoAudio, (state) => state.microfonoEstado);
export const selecccionarAudioError = createSelector(seleccionarEstadoAudio, (state) => state.errorMesage);


export const seleccionarAudioPeligro = createSelector(
  seleccionarAudioConfiguracion,
  (configuracion) => configuracion.volume > 85 && configuracion.bass > 8
);
