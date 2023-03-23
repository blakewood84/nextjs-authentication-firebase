import Protected from "@/components/protected";
import useAuth from "@/hooks/useAuth";
import Router from "next/router";

export default function Dashboard() {
  const { signOutUser } = useAuth();

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
        <button onClick={() => signOutUser()}>Logout</button>
      </main>
    </Protected>
  );
}
