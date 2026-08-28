import { Injectable, inject } from '@angular/core';
import { ClimaEspacialService } from '../../services/clima-redux.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ClimaEspacialActions from '../actions/clima-redux.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ClimaEspacialEffects {

    private actions$= inject(Actions);
    private climaEspacialService= inject(ClimaEspacialService);

  cargarTelemetria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClimaEspacialActions.cargarTelemetria),
      mergeMap(() =>
        this.climaEspacialService.getSateliteTelemetria().pipe(
        map((telemetria) => ClimaEspacialActions.cargarTelemetriaExito({telemetria})),
        catchError((error) => of(ClimaEspacialActions.cargarTelemetriaError({error: error.message})))
      )
    )
    )
  );
}
