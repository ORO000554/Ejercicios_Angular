import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { AppContador } from './contador/contador';
import { FormComponent } from './form/form';
import { appInterpolacion } from './Ejercicios/interpolacion';
import { appClases } from './Ejercicios/clases';
import { ContadorComponentRedux } from '../Redux/contador.component';
import { HeaderComponent } from './routes/header.component';
import { TodoComponent } from '../Redux/ListaTareas/todo.component/todo.component';
import { ThemeComponent } from '../Redux/ModoOscuro/theme.component/theme.component';
import { CartComponent } from '../Redux/CarritoCompras/cart.component/cart.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
  ],
  template: `
    <div class="container">
      <div class="container-navbar">
        <!-- <app-home/> -->
        <app-header />
      </div>
    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  title = 'Pagina';
}
