import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SupportState } from "../../model/ticket.model";



export const selectSupportState = createFeatureSelector<SupportState>('soporteModulo');
export const selectFiltroActual = createSelector(selectSupportState, (state) => state.filtroCategoria);
export const selectCargando = createSelector(selectSupportState, (state) => state.cargando );

export const selectTodosTickets = createSelector(selectSupportState, (state) => state.tickets);

export const selectTicketsFiltrados = createSelector(
  selectTodosTickets,
  selectFiltroActual,
  (tickets, filtro) => {
    if(filtro === 'Todos')return tickets;
    return tickets.filter(t => t.categoria === filtro);
  }
);
