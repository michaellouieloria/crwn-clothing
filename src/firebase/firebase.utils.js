import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2ZWUQNZV-sMfJPDMEoCACw8HD0A-yn3Y",
  authDomain: "crwn-clothing-4f8f7.firebaseapp.com",
  databaseURL: "https://crwn-clothing-4f8f7.firebaseio.com",
  projectId: "crwn-clothing-4f8f7",
  storageBucket: "crwn-clothing-4f8f7.appspot.com",
  messagingSenderId: "765609865872",
  appId: "1:765609865872:web:3f85d59c9511f7a4085e15"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
