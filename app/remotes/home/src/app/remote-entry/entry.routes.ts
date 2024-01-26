import {Route} from '@angular/router';
import {RemoteEntryComponent} from './entry.component';
import {authGuard} from "../../../../../shared/guards/authGuard";


export const remoteRoutes: Route[] = [
  {path: '', component: RemoteEntryComponent,
    loadChildren: () => import('detecciones/Routes').then((m) => m.remoteRoutes),
    canActivate: [authGuard]},
];
