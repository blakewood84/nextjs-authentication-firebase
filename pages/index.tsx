import Head from "next/head";
import SignIn from "./sign_in";

// Going to the root route "/" will check for:
// Is the user authenticated? Goto Dashboard
// Is the user not authenticated? Goto Sign In page

export default function Home() {
  return (
    <>
      <Head>
        <title>Trust Poll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </>
  );
}
