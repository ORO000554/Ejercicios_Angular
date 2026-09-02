import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ViajesRedux } from "../models/viajes.model";


@Injectable({
  providedIn: 'root'
})
export class ViajeReduxService{
  getViajeRedux(): Observable<ViajesRedux[]>{
    const mockData: ViajesRedux[] = [
      {idViaje: 'AME-AEU-001', NombrePasajero: 'Irvin', Destino: 'Barcelona Europa', Costo: 'CARO', fecha: new Date().toDateString(), origen: 'Tlaxiaco Oaxacca', duracion: 9, medioTransporte: 'Avion', estado: 'Pendiente'},
      {idViaje: 'AME-AEU-010', NombrePasajero: 'Pedro', Destino: 'Madrid Europa', Costo: 'PREMIUM', fecha: new Date().toDateString(), origen: 'Ciudad de México', duracion: 10, medioTransporte: 'Avion', estado: 'En proceso'},
      {idViaje: 'AME-ABR-011', NombrePasajero: 'Sergio', Destino: 'Rio de Janeiro Brasil', Costo: 'CARO', fecha: new Date().toDateString(), origen: 'Tlaxiaco Oaxaca', duracion: 16, medioTransporte: 'Bus', estado: 'Completado'},
      {idViaje: 'AME-ABR-100', NombrePasajero: 'Johan', Destino: 'Brasil Brasil', Costo: 'BARATO', fecha: new Date().toDateString(), origen: 'Queretaro Mexico', duracion: 14, medioTransporte: 'Auto', estado: 'Cancelado'},
      {idViaje: 'AME-AAU-101', NombrePasajero: 'Issac', Destino: 'Sidney Australia', Costo: 'PREMIUM', fecha: new Date().toDateString(), origen: 'Oaxaca Mexico', duracion: 30, medioTransporte: 'Barco', estado: 'Pendiente'},
      {idViaje: 'AME-AAU-110', NombrePasajero: 'Jack', Destino: 'Brisbane Australia', Costo: 'CARO', fecha: new Date().toDateString(), origen: 'Sydney Australia', duracion: 5, medioTransporte: 'Avion', estado: 'En proceso'},
      {idViaje: 'AME-AJP-111', NombrePasajero: 'Christopher', Destino: 'Tokio Japon', Costo: 'BARATO', fecha: new Date().toDateString(), origen: 'Ciudad de México', duracion: 8, medioTransporte: 'Avion', estado: 'Pendiente'},

    ];
    return of(mockData).pipe(delay(1000));
  }
}
