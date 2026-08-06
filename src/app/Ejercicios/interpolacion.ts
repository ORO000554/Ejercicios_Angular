import {Component, signal} from '@angular/core';

@Component({
    selector: 'app-interpolaion',
    template: `
    <p> Tu tema preferido es {{temaPreferido()}}</p>
    `,

})
export class appInterpolacion{
    temaPreferido = signal('Desarrollo web con angular');
}