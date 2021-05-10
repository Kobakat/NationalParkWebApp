import Layout from "../Globals/Layout";
import PageHeader from "../Globals/PageHeader";
import HeroSection from "../HomePage/HeroSection";
import SectionOne from "../HomePage/SectionOne";
import SectionTwo from "../HomePage/SectionTwo";
import SectionThree from "../HomePage/SectionThree";
import SectionFour from "../HomePage/SectionFour";
import Login from "../HomePage/login";
import { useState, useEffect } from "react";
import "./home-page.css";
import useUser from "../../hooks/use-user";
import { auth, usersCollection } from "../../firebase/firebase";
import GetLocation from "../UtilityComponents/get-location";

function HomePage({ callback }) {
  const [searchBarParams, setSearchBarParams] = useState([]);

  const searchBarCallback = (childData) => {
    setSearchBarParams(childData);
  };

  const [isLoading, error, user] = useUser(auth);
  const setData = async (user) => {
    try {
      await usersCollection.doc(user.uid).set({
        Name: user.displayName,
        profilePic: user.photoURL,
      });
    } catch (err) {
      console.error(err);
    }
    console.log("Success!");
  };

  if (user) setData(user);
  if (user) GetLocation(user);

  useEffect(() => {
    callback(searchBarParams);
  }, [searchBarParams]);

  return (
    <Layout user={user}>
      <div id="content">
        <PageHeader />
        <HeroSection callback={searchBarCallback} />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </Layout>
  );
}
export default HomePage;
