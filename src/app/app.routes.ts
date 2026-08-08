import { Routes } from '@angular/router';
import { Vista1 } from "./routes/vista1.component";
import { Vista2 } from "./routes/vista2.component";
import { ResourceComponent } from './routes/resource.component';

export const routes: Routes = [
    {path: '', redirectTo: '/vista1-component', pathMatch: 'full'},
    {path: 'vista1-component', component: Vista1 },
    {path:'vista2-component', component: Vista2},
    {path: 'app-resource/:id', component: ResourceComponent},
];
