import { Component } from "@angular/core";
import { ViajeReduxComponent } from "../../viajesRedux/components/viaje.component";

@Component({
  selector: 'viaje-redux-vista',
  standalone: true,
  template: `
    <viaje-redux-dashboard/>
  `,
  imports: [ViajeReduxComponent],
})
export class ViajeRedux{}
