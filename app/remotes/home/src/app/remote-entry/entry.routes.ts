import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {authGuard} from "../../../../../shared/guards/authGuard";


export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, canActivate: [authGuard] },
];
