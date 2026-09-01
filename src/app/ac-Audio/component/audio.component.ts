import { AsyncPipe, CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ConfiguracionAudio } from '../model/audio.model';
import { Observable } from "rxjs";
import { selecccionarAudioError, seleccionarAudioConfiguracion, seleccionarMicrofonoEstado, seleccionarAudioPeligro } from '../store/selectors/audio.selectors';
import { Store } from "@ngrx/store";
import { connectMicrophone, updateEqualizer } from "../store/actions/audio.actions";

@Component({
  selector: 'app-audio-component',
  standalone: true,
  imports:[AsyncPipe, CommonModule],
  templateUrl: './audio.component.html',
  styleUrl:'./audio.component.css',
})
export class AudioComponent{

private store = inject(Store);

configuracion$: Observable<ConfiguracionAudio> = this.store.select(seleccionarAudioConfiguracion);
status$: Observable<string> = this.store.select(seleccionarMicrofonoEstado);
error$: Observable<string | null> = this.store.select(selecccionarAudioError);
isHazardous$: Observable<boolean> = this.store.select(seleccionarAudioPeligro);



onSliderChange(property: keyof ConfiguracionAudio, event: Event): void{
  const value = +(event.target as HTMLInputElement).value;

  this.store.dispatch(updateEqualizer({
    configuracion: {[property]: value}
  }));
}
onConnectMic():void{
  this.store.dispatch(connectMicrophone())
}
}
