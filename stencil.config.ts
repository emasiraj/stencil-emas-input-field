import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-emas-input-field',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
