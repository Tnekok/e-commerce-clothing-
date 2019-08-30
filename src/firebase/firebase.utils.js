import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3PKdqkOljFjAZTFJRymSHsLA7fhJsoUQ",
    authDomain: "e-commerce-clothing-2adef.firebaseapp.com",
    databaseURL: "https://e-commerce-clothing-2adef.firebaseio.com",
    projectId: "e-commerce-clothing-2adef",
    storageBucket: "",
    messagingSenderId: "182510193072",
    appId: "1:182510193072:web:6037392f0320f1d1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propm: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
