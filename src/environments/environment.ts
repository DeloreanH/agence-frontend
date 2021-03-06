// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const HOST = 'fathomless-ravine-75965.herokuapp.com';

const API = {
  type: 'https',
  host: HOST,
  port: null,
  get url(): string {
    return `${this.type}://${this.host}${this.port ? ':' + this.port : ''}/api`;
  },
};

export const environment = {
  production: false,
  requestTime: 20000,
  requestRetry: 0,
  delayRequest: 0,
  api: API,
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */