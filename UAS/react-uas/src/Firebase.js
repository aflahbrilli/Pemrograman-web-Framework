import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCjK1YOv6ElVyTmhZGxKSzamhLeMn4lWvw",
    authDomain: "react-uasweb.firebaseapp.com",
    databaseURL: "https://react-uasweb.firebaseio.com",
    projectId: "react-uasweb",
    storageBucket: "react-uasweb.appspot.com",
    messagingSenderId: "835594176465",
    appId: "1:835594176465:web:96fc6f5015537b8c8942f0",
    measurementId: "G-PHTHR7252K"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;