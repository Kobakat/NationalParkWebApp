import { useEffect, useState } from "react";
import { usersCollection } from "../firebase/firebase";

const UseCheckfav = async (parkCode, user) => {
  
};

const UseCheckFavorite = (parkCode, user) => {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const parkToCheck = UseCheckfav(parkCode, user);
    console.log(parkToCheck)
    if (parkToCheck) {
      setIsFavorite(true);
      console.log("favorite to true");
    } else {
      console.log("no.");
    }
  }, [parkCode]);

  return isFavorite;
};

export default UseCheckFavorite;
