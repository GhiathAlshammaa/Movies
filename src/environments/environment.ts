// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  apiConfig: {
    apikey: '6d63ff2905593d362cd65d9b4367d4d6',
    urlBase: 'https://api.themoviedb.org/3/',
    urlConfig: 'https://api.themoviedb.org/3/configuration/',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyCf0fdaCnXf_5FWaONqSJ8P4CWV_3ZMvSY',
    authDomain: 'movies-18cbd.firebaseapp.com',
    databaseURL:
      'https://movies-18cbd-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'movies-18cbd',
    storageBucket: 'movies-18cbd.appspot.com',
    messagingSenderId: '1083790707183',
    appId: '1:1083790707183:web:ca3fa3abb35b8258ae8e1a',
    measurementId: 'G-0T4ZL9F7SB',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
