import React, { useCallback, useEffect, useMemo, useState } from "react";
import app from "@/config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import Router from "next/router";

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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user: ", user);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signInUser = useCallback((email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signed in!");
        Router.push("/dashboard");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const signOutUser = useCallback(() => {
    signOut(auth);
  }, []);

  const checkAuthState = useCallback(() => {
    return new Promise((resolve) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }, []);

  const values: any = useMemo(
    () => ({
      user,
      signInUser,
      signOutUser,
      checkAuthState,
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
