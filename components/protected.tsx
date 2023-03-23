import { ReactNode, useEffect, useState } from "react";

import app from "@/config/firebaseConfig";
import { getAuth, User } from "firebase/auth";
import { JsxElement } from "typescript";

import Router from "next/router";

export default function Protected({ children }: { children: ReactNode }) {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null | undefined>(undefined);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user Protected: ", user);
      if (user === null) {
        Router.push("/sign_in");
      }
      setUser(user);
    });
    return () => {
      console.log("dispose Protected!");
      unsubscribe();
    };
  }, [user]);

  if (user === undefined) return null;

  return <>{children}</>;
}
