import { Component } from "@angular/core";
import { AppContador } from "../contador/contador";
import { FormComponent } from "../form/form";
import { appInterpolacion } from "../Ejercicios/interpolacion";
import { appClases } from "../Ejercicios/clases";


@Component({

    selector:'vista2-component',
    template: `
    <p>Bienvenidos a la vista principal, en donde utilizamos navegacion por router Link</p>
    <img style="width: 45%; heigth:40%;" src="https://municipiodequeretaro.gob.mx/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-07-at-2.28.43-PM3-1536x1023.jpeg"/>
    
    <div style="background-color: aliceblue; padding: 10px; margin-top: 5px;">
      <app-contador/>
      <app-form/>
      <app-interpolaion/>
      <app-clases/>
    </div>
    `,
    imports: [AppContador, FormComponent, appInterpolacion, appClases],

})
export class Vista2{}