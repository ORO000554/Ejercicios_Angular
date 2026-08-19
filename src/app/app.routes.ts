import { Routes } from '@angular/router';
import { Vista1 } from "./routes/vista1.component";
import { Vista2 } from "./routes/vista2.component";
import { ResourceComponent } from './routes/resource.component';
import { Vista3 } from './routes/vistta3.component';

export const routes: Routes = [
    {path: '', redirectTo: '/vista2-component', pathMatch: 'full'},
    {path: 'vista1-component', component: Vista1 },
    {path:'vista2-component', component: Vista2},
    {path: 'vista3-component', component: Vista3}
];
