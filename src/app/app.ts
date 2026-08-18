import { Component, signal } from '@angular/core';
import { HeaderComponent } from './routes/header.component';

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
