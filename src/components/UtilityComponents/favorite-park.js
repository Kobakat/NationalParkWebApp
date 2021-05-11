import { usersCollection } from "../../firebase/firebase";

const favorite = async (parkCode, user, name) => {
  if (user) {
    try {
      await usersCollection
        .doc(user.uid)
        .collection("favoriteParks")
        .doc(parkCode)
        .set({
          parkCode: parkCode,
          name: name,
        });
    } catch (err) {
      console.error(err);
    }
  }
};

export default favorite;
