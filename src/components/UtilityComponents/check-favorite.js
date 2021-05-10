import { usersCollection } from "../../firebase/firebase";
import favorite from "./favorite-park";

const CheckFavorite = async (parkCode, user) => {
  const parkRef = usersCollection
    .doc(user[0].uid)
    .collection("favoriteParks")
    .doc(parkCode);
  const isFavorite = await parkRef.get();
  if (isFavorite.exists) {
    return true;
  } else {
    return false;
  }
};

export default CheckFavorite;
