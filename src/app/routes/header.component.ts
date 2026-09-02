import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FormComponent } from "../form/form";
import { AppContador } from "../contador/contador";
import { appClases } from "../Ejercicios/clases";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl:'./header.componentt.html',
    styleUrl:'./header.component.css',
})
export class HeaderComponent{

  PaginaActiva : number = 1;

  paginaSeleccionada( numero : number): void{
    this.PaginaActiva = numero;
  }

}
