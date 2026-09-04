import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TicketService } from "../../service/ticket.service";
import { mergeMap, map } from 'rxjs';
import { TicketActions } from "../actions/ticket.actions";



@Injectable()
export class TicketEffects {
  private actions$ = inject(Actions);
  private ticketService = inject(TicketService);

  cargarTickets$ =  createEffect(() =>
  this.actions$.pipe(
    ofType(TicketActions.cargarTicketsIniciales),
    mergeMap(() =>
        this.ticketService.obtenerTicketsLocales().pipe(
          map(ticketsObtenidos => TicketActions.cargarTicketsExito({tickets: ticketsObtenidos}))
        )
    )
  )

  );
}
