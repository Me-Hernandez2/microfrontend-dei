import {Route} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
];
