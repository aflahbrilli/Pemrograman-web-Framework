import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmyK-WCSujN27GK8gq2OQqYCdlAqSkXL4",
    authDomain: "aflah-minggu12.firebaseapp.com",
    databaseURL: "https://aflah-minggu12.firebaseio.com",
    projectId: "aflah-minggu12",
    storageBucket: "aflah-minggu12.appspot.com",
    messagingSenderId: "1015949991054",
    appId: "1:1015949991054:web:50860a12d3596c87ee7ddf",
    measurementId: "G-VCFH90LC9J"
  };

export const myFirebase= firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db= baseDB;