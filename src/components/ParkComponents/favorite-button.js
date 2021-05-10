import React, { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { usersCollection } from "../../firebase/firebase";
import UseCheckFavorite from "../../hooks/use-check-favorite";
function FavoriteButton({ parkCode, user, onFavoriteSubmit }) {
  const [isFav, setIsFav] = useState(false);
  const checkFav = async (parkCode, user) => {
    try {
      const parkRef = usersCollection
        .doc(user[2].uid)
        .collection("favoriteParks")
        .doc(parkCode);
      const isFavorite = await parkRef.get();
      if (isFavorite) {
        if (isFavorite.exists) {
          setIsFav(true);
          console.log("it does exist");
        } else {
          setIsFav(false);
          console.log("it doesn't exist");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  checkFav(parkCode, user);

  console.log(isFav);
  return (
    <div>
      {isFav ? <BsFillHeartFill /> : <BsHeart onClick={onFavoriteSubmit} />}
    </div>
  );
}

export default FavoriteButton;
