import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'gestionar-detecciones',
  exposes: {
    './Routes':
      'app/remotes/gestionar-detecciones/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
