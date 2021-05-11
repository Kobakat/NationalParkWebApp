import { usersCollection } from "../../firebase/firebase";

const unfavorite = async (parkCode, user, name) => {
  try {
    await usersCollection
      .doc(user[0].uid)
      .collection("favoriteParks")
      .doc(parkCode)
      .delete();
  } catch (err) {
    console.error(err);
  }
};

export default unfavorite;
