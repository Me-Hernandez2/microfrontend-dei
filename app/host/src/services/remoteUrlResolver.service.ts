import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class RemoteUrlResolverService {
  resolveUrl(name: string) {
    switch (name) {
      case 'detecciones':
        return 'http://localhost:4204/remoteEntry.js';
      default:
        throw new Error(`No se encontró la aplicación remota "${name}".`);
    }
  }
}
