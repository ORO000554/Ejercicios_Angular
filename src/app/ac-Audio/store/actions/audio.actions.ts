import { createAction, props } from "@ngrx/store";
import { ConfiguracionAudio } from '../../model/audio.model';


export const updateEqualizer = createAction(
  '[Audio] Update Equalizer',
  props<{configuracion: Partial <ConfiguracionAudio>}>()
);

export const applyEqualizerSuccess  = createAction('[Audio] Applyy Equalizer Success');

export const connectMicrophone = createAction('[Audio], Microfono Conectado');
export const connectMicrophoneSuccess =  createAction('[Audio], Microfono Conectado Exito');
export const connectMicrophoneError = createAction('[Audio], Microfono Conectado Error',
  props<{error: string}>()
);
