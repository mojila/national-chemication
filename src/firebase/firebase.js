import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCg2iMT2SlEY2km2gXuEXJ_q0uExTMTQeo",
    authDomain: "national-chemication.firebaseapp.com",
    databaseURL: "https://national-chemication.firebaseio.com",
    projectId: "national-chemication",
    storageBucket: "national-chemication.appspot.com",
    messagingSenderId: "595587030048"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

export {
    auth,
    database,
    storage
};