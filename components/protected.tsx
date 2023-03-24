import { ReactNode, useEffect, useState } from "react";

import app from "@/config/firebaseConfig";
import { getAuth, User } from "firebase/auth";

import Router from "next/router";

export default function Protected({ children }: { children: ReactNode }) {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user === null) {
        Router.push("/sign_in");
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return null;

  return <>{children}</>;
}
