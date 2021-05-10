import { usersCollection } from "../../firebase/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const GetLocation = (user) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    const coordinates = pos.coords;
    console.log(coordinates.latitude, coordinates.longitude);

    console.log(user);

    const setLocation = async (user) => {
      await usersCollection.doc(user.uid).update({
        location: new firebase.firestore.GeoPoint(
          coordinates.latitude,
          coordinates.longitude
        ),
      });
    };

    setLocation(user);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};

export default GetLocation;
