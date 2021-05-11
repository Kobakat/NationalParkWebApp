import Layout from "../Globals/Layout";
import PageHeader from "../Globals/PageHeader";
import HeroSection from "../HomePage/HeroSection";
import SectionOne from "../HomePage/SectionOne";
import SectionTwo from "../HomePage/SectionTwo";
import SectionThree from "../HomePage/SectionThree";
import SectionFour from "../HomePage/SectionFour";

import { useState, useEffect } from "react";
import "./home-page.css";

import { usersCollection } from "../../firebase/firebase";
import GetLocation from "../UtilityComponents/get-location";


function HomePage({ user }) {
  console.log(user);

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

  return (
    <Layout user={user}>
      <div id="content">
        <PageHeader />
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </Layout>
  );
}
export default HomePage;
