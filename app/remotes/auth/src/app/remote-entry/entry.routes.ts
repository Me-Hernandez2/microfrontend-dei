import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {LoginComponent} from "./components/login/login.component";

export const remoteRoutes: Route[] = [
  { path: '', component: LoginComponent },
];
