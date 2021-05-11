import React, { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { usersCollection } from "../../firebase/firebase";

function FavoriteButton({
  parkCode,
  user,
  onFavoriteSubmit,
  onUnFavoriteSubmit,
}) {
  const [isFav, setIsFav] = useState(false);

  const onButtonClick = () => {
    checkFav(parkCode, user);
  };
  const checkFav = async (parkCode, user) => {
    if (user) {
      try {
        const parkRef = usersCollection
          .doc(user.uid)
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
  if (user) checkFav(parkCode, user);

  console.log(isFav);
  return (
    <div onClick={onButtonClick}>
      {isFav ? (
        <BsFillHeartFill onClick={onUnFavoriteSubmit} />
      ) : (
        <BsHeart onClick={onFavoriteSubmit} />
      )}
    </div>
  );
}

export default FavoriteButton;
