import React, { useCallback, useEffect, useMemo, useState } from "react";
import app from "@/config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

export const AuthContext = React.createContext<any | null>(null);

type AuthContextType = {
  user: boolean;
};

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("user: ", user);
    });
    return () => {
      console.log("dispose");
    };
  }, []);

  const signInUser = useCallback((email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signed in!");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const signOutUser = useCallback(() => {
    signOut(auth);
  }, []);

  const values: any = useMemo(
    () => ({
      user,
      signInUser,
      signOutUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

/**
 * Fetches user data for a given artist by their profile_url.
 */
export default function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "`useFollowing` hook must be used within a `AuthContextProvider` component"
    );
  }

  return context;
}
