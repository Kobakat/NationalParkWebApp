import { auth } from "../../firebase/firebase";

const SignOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.error(err);
  }
};

export default SignOut;
