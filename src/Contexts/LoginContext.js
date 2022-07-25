import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function Register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  console.log(user);

  // if (loading) return "LOADING";

  return (
    <LoginContext.Provider
      value={{
        Login,
        Register,
        LogOut,
        user
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
