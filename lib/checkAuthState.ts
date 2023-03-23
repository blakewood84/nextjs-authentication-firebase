import app from "@/config/firebaseConfig";
import { getAuth } from "firebase/auth";

export default function checkAuthState() {
  const auth = getAuth(app);
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      console.log("user checkAuthState: ", user);
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
}
