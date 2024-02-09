import { Route } from '@angular/router';
import {RevisionDeteccionesComponent} from "./components/revision-detecciones/revision-detecciones.component";

export const remoteRoutes: Route[] = [
  { path: 'detecciones', component: RevisionDeteccionesComponent },
];
