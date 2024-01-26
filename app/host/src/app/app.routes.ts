import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { authGuard } from '../../../shared/guards/authGuard';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard],
  },
];
