import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXjYTwxD_r0N3MI37o1b8z7ddWfgqxFts",
    authDomain: "chat-app-1a10d.firebaseapp.com",
    projectId: "chat-app-1a10d",
    storageBucket: "chat-app-1a10d.appspot.com",
    messagingSenderId: "307311772462",
    appId: "1:307311772462:web:14870e17f967a36b6330bf"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


