import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Ticket } from '../../model/ticket.model';


export const TicketActions = createActionGroup({
  source: 'Mesa de soporte',
  events: {
    //proceso de inicializacion con el servvicio
    'Cargar Tickets Iniciales': emptyProps(),
    'Cargar Tickets Exito': props<{tickets: Ticket[]}>(),

    //operaciones del usuario
    'Crear Ticket': props<{titulo: string; descripcion: string; categoria: 'Hardware' | 'Software' | 'Redes'; prioridad: 'Baja' | 'Media' | 'Alta' }>(),
    'Cambiar Estado': props<{ticketId: string; nuevoEstado: 'Abierto' | 'En proceso' | 'Resuelto'}>(),
    'Establecer Filtro Categoria':props<{categoria: string}>(),

  }
});
