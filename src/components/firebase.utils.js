import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFEmftwnBes8n-4VDlnXJDEFBNqURhSyg",
  authDomain: "styleit-db.firebaseapp.com",
  databaseURL: "https://styleit-db.firebaseio.com",
  projectId: "styleit-db",
  storageBucket: "styleit-db.appspot.com",
  messagingSenderId: "436569287622",
  appId: "1:436569287622:web:cdf428f05d905b1765a0c7",
  measurementId: "G-3NSZHR1W5W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  ObjectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  ObjectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollections = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      id: docSnapshot.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
