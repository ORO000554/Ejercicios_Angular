import { ClimaComponent } from '../../climaRedux/components/clima-redux.component';
import { Component } from "@angular/core";


@Component({
    selector: 'clima-redux-vista',
    standalone: true,
    template: `


   <app-space-dashboard/>
    `,
    imports: [ClimaComponent],


})
export class Vista3{}
