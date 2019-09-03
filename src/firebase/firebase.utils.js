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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creationDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                creationDate,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach( ( obj ) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = ( collections ) => {
    const transformedCollection = collections.docs.map( (doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce( ( accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propm: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
