import {Route} from '@angular/router';
import {RemoteEntryComponent} from './entry.component';
import {authGuard} from "../../../../../shared/guards/authGuard";


export const remoteRoutes: Route[] = [
  {path: '', component: RemoteEntryComponent,
    loadChildren: () => import('gestionar-detecciones/Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard]},
  {path: 'eventos', component: RemoteEntryComponent,
    loadChildren: () => import('event/Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard]}
];
