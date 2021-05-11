import { useEffect, useState } from "react";
import { usersCollection } from "../firebase/firebase";

const UseGetFirebaseParks = (user) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const GetParks = async (user) => {
      try {
        const snapshot = await usersCollection
          .doc(user.uid)
          .collection("favoriteParks")
          .get();

        setData(snapshot);
        console.log(snapshot);
      } catch (err) {
        console.error(err);
      }
    };
    if (user) GetParks(user);
    console.log("Calling...");
  }, [user]);

  return data;
};

export default UseGetFirebaseParks;
