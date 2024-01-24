import {setRemoteDefinitions} from "@nx/angular/mf";

setRemoteDefinitions({
  'gestionar-detecciones': 'http://localhost:4203/remoteEntry.js',
});


import('./bootstrap').catch((err) => console.error(err));
