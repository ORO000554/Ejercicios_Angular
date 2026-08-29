import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ViajesRedux } from "../models/viajes.model";


@Injectable({
  providedIn: 'root'
})
export class ViajeReduxService{
  getViajeRedux(): Observable<ViajesRedux[]>{
    const mockData: ViajesRedux[] = [
      {idViaje: 'AM-AE-001', NombrePasajero: 'Irvin JS', Destino: 'Barcelona Europa', Costo: 'CARO', fecha: new Date().toDateString()},
      {idViaje: 'AM-AE-002', NombrePasajero: 'Pedro', Destino: 'Madrid Europa', Costo: 'PREMIUM', fecha: new Date().toDateString()},
      {idViaje: 'AM-AB-011', NombrePasajero: 'Sergio', Destino: 'Rio de Janeiro Brasil', Costo: 'CARO', fecha: new Date().toDateString()},
      {idViaje: 'AM-AB-012', NombrePasajero: 'Johan', Destino: 'Brasil Brasil', Costo: 'BARATO', fecha: new Date().toDateString()},

    ];
    return of(mockData).pipe(delay(1000));
  }
}
