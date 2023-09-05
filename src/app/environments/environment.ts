// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    authDomain: "itacorubi.firebaseapp.com",
    projectId: "itacorubi",
    storageBucket: "itacorubi.appspot.com",
    messagingSenderId: "171683457328",
    appId: "1:171683457328:web:c4c521f883a137ffce80f5",
    measurementId: "G-R3EX26S905"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);