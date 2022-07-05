import { initializeApp } from "firebase/app";
import {
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcxa-RSQuFh0Oh0CtXPHqLzAUWawj-Gsg",
  authDomain: "crwn-clothing-65475.firebaseapp.com",
  projectId: "crwn-clothing-65475",
  storageBucket: "crwn-clothing-65475.appspot.com",
  messagingSenderId: "751829012738",
  appId: "1:751829012738:web:6796edc7a2c8a6863c321b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("There was an error adding the user", error.message);
    }
  }

  return userDocRef;
};
