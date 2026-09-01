
import { inject, Injectable } from '@angular/core';
import * as AudioActions from '../actions/audio.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AudioService } from '../../services/audio.service';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { seleccionarAudioConfiguracion } from '../selectors/audio.selectors';
import { connectMicrophone } from '../actions/audio.actions';

@Injectable()
export class AudioEffects{

    private actions$= inject(Actions);
    private audioService= inject(AudioService);
    private store= inject(Store);


  syncHardwareEqualizer$ = createEffect(() => this.actions$.pipe(
    ofType(AudioActions.updateEqualizer),
    withLatestFrom(this.store.select(seleccionarAudioConfiguracion)),
    mergeMap(([_, configuracion])=>
    this.audioService.ApplyHardwareEqualizer(configuracion.bass, configuracion.mids, configuracion.treble).pipe(

      map(() => AudioActions.applyEqualizerSuccess())
    )
    )
  ) );

  connectMicrophone$ = createEffect(() => this.actions$.pipe(

    ofType(AudioActions.connectMicrophone),
    mergeMap(()=>
      this.audioService.requestMicrophonePermission().pipe(
        map(() => AudioActions.connectMicrophoneSuccess()),
        catchError((err) => of(AudioActions.connectMicrophoneError({error: err.message})))
      )
    )
  ));
}
