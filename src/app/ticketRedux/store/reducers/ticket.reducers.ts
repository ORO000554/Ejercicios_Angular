import { createReducer, on } from "@ngrx/store";
import { SupportState } from "../../model/ticket.model";
import { TicketActions } from "../actions/ticket.actions";



export const estadoInicial: SupportState={
  tickets: [], ///lIMPIO POR DEFEFCTO
  filtroCategoria: 'Todos',
  cargando: false
};


export const supportReducer = createReducer(
  estadoInicial,

  //manejo de la csrga del servicio
  on(TicketActions.cargarTicketsIniciales, (state) => ({
    ...state,
    cargando: true
  })),
  on(TicketActions.cargarTicketsExito, (state, {tickets}) => ({
    ...state,
    tickets: tickets,
    cargando: false,
  })),

on(TicketActions.crearTicket, (state, action) => ({
  ...state,
  tickets: [
    ...state.tickets,
    {
      id: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      titulo: action.titulo,
      descripcion: action.descripcion,
      categoria: action.categoria,
      prioridad: action.prioridad,
      estado: 'Abierto',
      fechaCreacion: new Date()
    }
  ]
})),
on(TicketActions.cambiarEstado, (state, {ticketId, nuevoEstado}) => ({
  ...state,
  tickets: state.tickets.map(t => t.id === ticketId ? {...t, estado: nuevoEstado}: t)
})),

on(TicketActions.establecerFiltroCategoria, (state, {categoria}) => ({
  ...state,
  filtroCategoria: categoria
}))
);
