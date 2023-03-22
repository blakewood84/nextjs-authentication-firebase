import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

import app from "@/config/firebaseConfig";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

export default function AuthGateway() {
  useEffect(() => {
    const user = auth.currentUser;
  }, []);
  return (
    <main className={styles.main}>
      <h1 style={{ marginBottom: "10px" }}>Sign In</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input placeholder="Email" style={{ marginBottom: "10px" }} />
        <input placeholder="Password" style={{ marginBottom: "10px" }} />
        <button>Sign In</button>
      </div>
    </main>
  );
}
