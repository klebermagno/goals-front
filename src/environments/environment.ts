import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'itacorubi',
    appId: '1:171683457328:web:c4c521f883a137ffce80f5',
    storageBucket: 'itacorubi.appspot.com',
    locationId: 'us-west2',
    apiKey: 'AIzaSyDVO8uT8oP3FtbLSHWFmfiKE1V5vrIVwQo',
    authDomain: 'itacorubi.firebaseapp.com',
    messagingSenderId: '171683457328',
    measurementId: 'G-R3EX26S905',
  },
};
const firebaseConfig = {
  apiKey: "AIzaSyDVO8uT8oP3FtbLSHWFmfiKE1V5vrIVwQo",
  authDomain: "itacorubi.firebaseapp.com",
  projectId: "itacorubi",
  storageBucket: "itacorubi.appspot.com",
  messagingSenderId: "171683457328",
  appId: "1:171683457328:web:c4c521f883a137ffce80f5",
  measurementId: "G-R3EX26S905"
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);