import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'event',
  exposes: {
    './Routes': 'app/remotes/testEvents/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
