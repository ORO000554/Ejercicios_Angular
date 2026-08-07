import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home  } from './home/home';
import { AppContador } from './contador/contador' ;
import {FormComponent} from './form/form';
import { appInterpolacion } from "./Ejercicios/interpolacion";
import { appClases } from "./Ejercicios/clases";
import { ContadorComponentRedux } from "../Redux/contador.component"; 
@Component({
  selector: 'app-root',
  imports: [Home, AppContador, FormComponent, appInterpolacion, appClases, ContadorComponentRedux],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="https://static.vecteezy.com/system/resources/previews/000/366/438/non_2x/home-vector-icon.jpg" alt="logo" aria-hidden="true" height="30" width="30"/>

    </header>
    <section class="content">
      <app-home/>

      <app-contador/> 
      
      <app-form/>
      
      <app-interpolaion/>

      <app-clases/>

      <app-contador-redux/>
    </section>

  </main>
  `,
  styleUrls:['./app.css'],
})
export class App {
  title = 'homes';
  
}
