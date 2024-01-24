import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {authGuard} from "../../../../../shared/guards/authGuard";
import {loadRemoteModule} from "@nx/angular/mf";



export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, canActivate: [authGuard] },
  {
    path: 'gestionar-detecciones',
    loadChildren: () =>
      loadRemoteModule(
        'gestionar-detecciones',
        './Routes',
      ).then((m) => m.remoteRoutes),
  },

];
