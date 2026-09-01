import { Component } from "@angular/core";
import { AudioComponent } from "../../ac-Audio/component/audio.component";




@Component({
  selector: 'vista-audio-redux',
  standalone: true,
  template: `
  <app-audio-component/>
  `,
  imports: [AudioComponent]
})
export class VistaAudio{

}
