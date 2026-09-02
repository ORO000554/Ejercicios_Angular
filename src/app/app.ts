import { Component, signal } from '@angular/core';
import { HeaderComponent } from './routes/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,

],
  template: `
        <!-- <app-home/> -->
        <app-header />
  `,
  styleUrl: './app.css',
})
export class App {
  title = 'Pagina';
}
