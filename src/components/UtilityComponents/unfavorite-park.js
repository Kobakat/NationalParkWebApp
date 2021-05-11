import { usersCollection } from "../../firebase/firebase";

const unfavorite = async (parkCode, user) => {
  if (user) {
    try {
      await usersCollection
        .doc(user.uid)
        .collection("favoriteParks")
        .doc(parkCode)
        .delete();
    } catch (err) {
      console.error(err);
    }
  }
};

export default unfavorite;
