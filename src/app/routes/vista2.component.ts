import { Component } from "@angular/core";
import { AppContador } from "../contador/contador";
import { FormComponent } from "../form/form";
import { appClases } from "../Ejercicios/clases";


@Component({
    selector:'vista2-component',
    template: `

    `,
    imports: [AppContador, FormComponent, appClases],
    templateUrl:'./vista2.component.html'

})
export class Vista2{}
