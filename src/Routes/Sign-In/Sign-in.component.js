import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>signIn</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
