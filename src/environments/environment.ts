

import * as dotenv from 'dotenv';
dotenv.config();

const secret = process.env['FIREBASE_API_KEY'];

export const environment = {
  firebase: {
    projectId: 'itacorubi',
    appId: '1:171683457328:web:c4c521f883a137ffce80f5',
    storageBucket: 'itacorubi.appspot.com',
    locationId: 'us-west2',
    apiKey: secret,
    authDomain: 'itacorubi.firebaseapp.com',
    messagingSenderId: '171683457328',
    measurementId: 'G-R3EX26S905',
  },
};