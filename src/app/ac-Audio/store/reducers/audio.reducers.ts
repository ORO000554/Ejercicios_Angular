import { createReducer, on } from "@ngrx/store";
import { EstadoAudio } from "../../model/audio.model";
import * as AudioActions from '../actions/audio.actions';

export const EstadoInicialAudio: EstadoAudio={
  configuracion:{
    bass: 0,
    mids: 0,
    treble: 0,
    volume: 50
  },
  microfonoConectado: false,
  microfonoEstado: 'desconectado',
  errorMesage: null
};

export const audioReducer = createReducer(
  EstadoInicialAudio,

  on(AudioActions.updateEqualizer, (state, {configuracion}) =>({
    ...state,
    configuracion: {...state.configuracion, ...configuracion}
  })),
  //manejo del flujo del microfono del sistema
  on(AudioActions.connectMicrophone, (state) =>({
    ...state,
    microfonoEstado: 'conectando',
    errorMesage: null
  })),
  on(AudioActions.connectMicrophoneSuccess, (state) =>({
    ...state,
    microfonoConectado: true,
    microfonoEstado: 'conectado'
  })),
  on(AudioActions.connectMicrophoneError, (state, {error}) =>({
    ...state,
    microfonoConectado: false,
    microfonoEstado: 'error',
    errorMesage: error
  })),
)
