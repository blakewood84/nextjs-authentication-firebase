import Protected from "@/components/protected";

import Router from "next/router";
import { getAuth } from "firebase/auth";
import app from "@/config/firebaseConfig";

export default function Dashboard() {
  const auth = getAuth(app);

  const handleSignOut = async () => {
    await auth.signOut();
    Router.replace("/sign_in");
  };

  return (
    <Protected>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Dashboard</h1>
        <button onClick={() => handleSignOut()}>Logout</button>
      </main>
    </Protected>
  );
}
