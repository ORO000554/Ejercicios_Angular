import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home  } from './home/home';
import { AppContador } from './contador/contador' ;
import {FormComponent} from './form/form';
import { appInterpolacion } from "./Ejercicios/interpolacion";
import { appClases } from "./Ejercicios/clases";
import { ContadorComponentRedux } from "../Redux/contador.component";
import { HeaderComponent } from "./routes/header.component"; 
@Component({
  selector: 'app-root',
  imports: [Home, AppContador, FormComponent, appInterpolacion, appClases, ContadorComponentRedux, HeaderComponent],
  template: `

  <div class="container">
    
    <div class="container-navbar">
        <!-- <app-home/> -->
    <app-header/>

    </div>

   <div>
      <app-contador/>     
      <app-form/>
      <app-interpolaion/>
      <app-clases/>
      <app-contador-redux/>
   </div>
   <div>
   </div>

  </div>
  `,
  styleUrl:'./app.css',
})
export class App {
  title = 'homes';
  
}
