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
      {idSatelite: 'SOHO', velVientoSolar: 820, nivelRadiacion: 'CRITICO', probLlamaradaSolar: 88, ultimaActualizacion: new Date().toISOString()},
      {idSatelite: 'DSCOVR', velVientoSolar: 610, nivelRadiacion: 'ALTO', probLlamaradaSolar: 55, ultimaActualizacion: new Date().toISOString()},
    ];
      //simular latencia de red de 1.5 segundos
    return of(mockData).pipe(delay(1500));
  }
}
