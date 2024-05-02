import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";


export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // manage User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const information = { user, setUser, loginUser, registerUser ,loading};
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};
FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FirebaseProvider;
