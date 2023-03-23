import useAuth from "@/hooks/useAuth";
import Router from "next/router";

export default function Dashboard() {
  const { signOutUser, user } = useAuth();

  if (!user) Router.replace("/");

  return (
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
  );
}
