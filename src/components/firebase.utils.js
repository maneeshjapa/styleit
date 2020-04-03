import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFEmftwnBes8n-4VDlnXJDEFBNqURhSyg",
    authDomain: "styleit-db.firebaseapp.com",
    databaseURL: "https://styleit-db.firebaseio.com",
    projectId: "styleit-db",
    storageBucket: "styleit-db.appspot.com",
    messagingSenderId: "436569287622",
    appId: "1:436569287622:web:cdf428f05d905b1765a0c7",
    measurementId: "G-3NSZHR1W5W"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
