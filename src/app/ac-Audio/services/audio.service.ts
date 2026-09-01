import { Injectable } from "@angular/core";
import { delay, Observable, of, throwError } from "rxjs";



@Injectable({providedIn: 'root'})
export class AudioService{

  requestMicrophonePermission(): Observable<boolean>{
    const success = Math.random() > 0.2;


    if(success){
      return of(true).pipe(delay(1500));

    }else{

      return throwError(() => new Error('Permiso de microfono denegado por el sistema. '))
    }
  }
  //simula la aplicacion de fffrecuenccias

  ApplyHardwareEqualizer(bass: number, mids: number, treble: number): Observable<boolean> {
    console.log(`Hardware actualizado ->  Graves: ${bass}dB, Medios: ${mids}dB, Agudos: ${treble}dB`);
  return of(true);
  }

}
