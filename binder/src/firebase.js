import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBji-mr2Q2qfjZ6zdQYeudx3KedAVKdpA",
    authDomain: "binder-8761e.firebaseapp.com",
    projectId: "binder-8761e",
    storageBucket: "binder-8761e.appspot.com",
    messagingSenderId: "481490374438",
    appId: "1:481490374438:web:67127e37fa03a1e8debbe7",
    measurementId: "G-CG0MENDWHW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;