import { useEffect, useState } from "react";

const UseCheckfav = async (parkCode, user) => {};

const UseCheckFavorite = (parkCode, user) => {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const parkToCheck = UseCheckfav(parkCode, user);
    console.log(parkToCheck);
    if (parkToCheck) {
      setIsFavorite(true);
      console.log("favorite to true");
    } else {
      console.log("no.");
    }
  }, [parkCode, user]);

  return isFavorite;
};

export default UseCheckFavorite;
