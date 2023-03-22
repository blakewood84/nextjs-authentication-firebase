import styles from "@/styles/Home.module.css";
import useAuth from "@/hooks/useAuth";

export default function SignIn() {
  const { signInUser, signOutUser } = useAuth();
  console.log("rebuild SignIn");

  return (
    <main className={styles.main}>
      <h3 style={{ marginBottom: "10px" }}>Sign In</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input placeholder="email" style={{ marginBottom: "10px" }} />
        <input placeholder="password" style={{ marginBottom: "10px" }} />
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => {
            signInUser("blake@test.com", "Test1234*");
          }}
        >
          Sign In
        </button>
        <button onClick={() => signOutUser()}>Sign Out</button>
      </div>
    </main>
  );
}
