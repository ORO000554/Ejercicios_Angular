import { Injectable } from "@angular/core";
import { Ticket } from "../model/ticket.model";
import { delay, Observable, of, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class TicketService{

  private ticketsInicialesEstaticos: Ticket[]= [
    {
      id: 'TCK-0001',
      titulo: 'Fallo en la impresora',
      descripcion: 'La impresora laser no conecta al servidor de red. ',
      categoria: 'Redes',
      prioridad: 'Alta',
      estado: 'En proceso',
      fechaCreacion: new Date()
    },
    {
      id: 'TCK-0010',
      titulo: 'Actualizacion de IDE corporativo',
      descripcion: 'Solicitud de renovacion de liccencias para el equipo de desarrollo. ',
      categoria: 'Software',
      prioridad: 'Media',
      estado: 'Resuelto',
      fechaCreacion: new Date()
    },
    {
      id: 'TCK-0011',
      titulo: 'Instalacion de Office',
      descripcion: 'Solicitud para la instalacion de Office. ',
      categoria: 'Software',
      prioridad: 'Media',
      estado: 'Abierto',
      fechaCreacion: new Date()
    },
    {
      id: 'TCK-0100',
      titulo: 'Poco espacio en la memoria RAM',
      descripcion: 'La memoria RAM tiene poco espacio para ejecutar varios programas a la vez. ',
      categoria: 'Hardware',
      prioridad: 'Alta',
      estado: 'Abierto',
      fechaCreacion: new Date()
    },
    {
      id: 'TCK-0101',
      titulo: 'Fallo en las bocinas',
      descripcion: 'Los parlantes dejaron de funcionar mediante Bluetooth. ',
      categoria: 'Redes',
      prioridad: 'Baja',
      estado: 'Resuelto',
      fechaCreacion: new Date()
    },
  ];
  obtenerTicketsLocales(): Observable<Ticket[]>{
    return of(this.ticketsInicialesEstaticos).pipe(delay(400));
  }
}
