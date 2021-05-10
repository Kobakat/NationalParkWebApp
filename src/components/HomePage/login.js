import { auth, provider, usersCollection } from "../../firebase/firebase";
import GetLocation from "../UtilityComponents/get-location";

const signIn = async () => {
  try {
    await auth.signInWithPopup(provider);
    const user = await auth.currentUser;
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

export default signIn;
