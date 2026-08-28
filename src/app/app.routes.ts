import { Routes } from '@angular/router';
import { Vista1 } from "./routes/vista1.component";
import { Vista2 } from "./routes/vista2.component";
import { Vista3 } from './routes/vistta3.component';
import { NotFound } from './notFound/notFound';
import { ClimaComponent } from './climaRedux/components/clima-redux.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/vista2-component',
      pathMatch: 'full',
      title: 'Home'
    },
    {
      path: 'vista1-component',
      component: Vista1,
      title: 'Redux'
    },
    {
      path:'vista2-component',
      component: Vista2,
      title: 'Home'
    },
    {
      path: 'vista3-component',
      component: Vista3,
      title:'Redux + Angular'
    },
    {
      path: 'clima-redux-vista',
      component: ClimaComponent,
      title: 'R+A'
    },
    {
      path: '**',
      component: NotFound,
      title: 'NotFound'
    }
];
