import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { SateliteTelemetria } from '../model/clima-redux.model';


@Injectable({
  providedIn: 'root'
})
export class ClimaEspacialService{
  //simular datos de la NASA
  getSateliteTelemetria(): Observable<SateliteTelemetria[]>{
   const mockData: SateliteTelemetria[] = [
      {idSatelite: 'GOES-16', velVientoSolar: 450, nivelRadiacion: 'BAJO', probLlamaradaSolar: 12, ultimaActualizacion: new Date().toISOString()},
      {idSatelite: 'SOHO', velVientoSolar: 1120, nivelRadiacion: 'CRITICO', probLlamaradaSolar: 88, ultimaActualizacion: new Date().toISOString()},
      {idSatelite: 'DSCOVR', velVientoSolar: 910, nivelRadiacion: 'ALTO', probLlamaradaSolar: 71, ultimaActualizacion: new Date().toISOString()},
      {idSatelite: 'GOES-18', velVientoSolar: 750, nivelRadiacion: 'MEDIO', probLlamaradaSolar: 45, ultimaActualizacion:  new Date().toISOString()},
      {idSatelite: ' DSCOVR / ACE', velVientoSolar: 350, nivelRadiacion: 'BAJO', probLlamaradaSolar: 10, ultimaActualizacion: new Date().toISOString()},
    ];
      //simular latencia de red de 1 segundo
    return of(mockData).pipe(delay(1000));
  }
}
