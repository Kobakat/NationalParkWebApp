import React, { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { usersCollection } from "../../firebase/firebase";

function FavoriteButton({
  parkCode,
  user,
  onFavoriteSubmit,
  onUnFavoriteSubmit,
}) {
  console.log(user);
  const [isFav, setIsFav] = useState(false);
  const checkFav = async (parkCode, user) => {
    if (user[0]) {
      try {
        const parkRef = usersCollection
          .doc(user[0].uid)
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
    }
  };
  if (user) checkFav(parkCode, user[0]);

  console.log(isFav);
  return (
    <div>
      {isFav ? (
        <BsFillHeartFill onClick={onUnFavoriteSubmit} />
      ) : (
        <BsHeart onClick={onFavoriteSubmit} />
      )}
    </div>
  );
}

export default FavoriteButton;
