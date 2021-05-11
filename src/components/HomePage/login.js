import { auth, provider } from "../../firebase/firebase";

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
