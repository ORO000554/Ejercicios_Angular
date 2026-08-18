import { Component } from "@angular/core";
import { TemaConfigComponent } from "../../Redux/TemaOscuro/config.component";
import { AuthComponent } from "../../Redux/Auth.State/auth.component";


@Component({
    selector: 'vista3-component',
    standalone: true,
    template: `


    <!-- <app-modoOscurov2/> -->
    `,
    imports: [TemaConfigComponent, AuthComponent],
    templateUrl: './vista3.component.html'

})
export class Vista3{}
