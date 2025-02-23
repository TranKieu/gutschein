import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GutscheinComponent } from './home/gutschein/gutschein.component';

export const appRoutes: Route[] = [
  {
    path: 'gutscheine/:id', // dành cho khách
    component: GutscheinComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
