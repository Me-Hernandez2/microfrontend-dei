import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth',
  exposes: {
    './Routes': 'app/remotes/auth/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
