import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ViajeReduxService } from '../../services/viajes-redux.service';
import * as ViajeReduxActions from '../actions/viajes.actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class ViajeReduxEffects{

  private actions$ = inject(Actions);
  private viajeReduxService   = inject(ViajeReduxService);

  cargarViaje$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ViajeReduxActions.cargarViaje),
    mergeMap(() =>
    this.viajeReduxService.getViajeRedux().pipe(
      map((viajes) => ViajeReduxActions.cargarViajeExito({viajes})),
      catchError((error) => of(ViajeReduxActions.cargaViajeError({error: error.message})))
    )
    )
  )
  );

}
