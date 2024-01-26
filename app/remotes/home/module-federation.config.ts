import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'home',
  remotes: [],
  exposes: {
    './Routes': 'app/remotes/home/src/app/remote-entry/entry.routes.ts',
  },

};

export default config;
