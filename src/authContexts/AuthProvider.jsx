import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("current user", currentUser);
  //     } else {
  //       console.log("user is not found");
  //     }
  //   });
  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = { createUser, signInUser, user, logOutUser };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
