import React, { useState } from "react";
import Layout from "../Globals/Layout";
import Accordion from "./Accordion";

function FAQPage() {
  const [active, setActive] = useState(
    "Is the data and information presented on this website accurate?"
  );
  return (
    <Layout>
      <section class="block flex flex-col text-center">
        <h1 class="text-7xl m-4 text-rocky">FAQ</h1>
      </section>
      <section className="accordionSection">
        <Accordion
          question="Is the data and information presented on this website accurate?"
          answer="Yes! All of the data that is being displayed is directly taken from the National Park Service API, which is an agency overseen and ran by the United States Federal Government. Thank you NPS!"
          active={active}
          setActive={setActive}
        />
        <Accordion
          question="What are you as Parkway doing with my data?"
          answer="Parkway was never designed to be a data gathering giant or a brand that even needs or wants your data. We use only the neccesary items of data to accurately display distance from and to parks and a personalized experience tailored to your secure and protected profile page."
          active={active}
          setActive={setActive}
        />
        <Accordion
          question="How can I save parks and plan trips?"
          answer="Simple! Sign up with your favorite authentication and create a profile! Within no time you will be saving parks and planning trips!"
          active={active}
          setActive={setActive}
        />
        <Accordion
          question="Why Parkway and not big established companies?"
          answer="We love the outdoors just like you, and we want a friendly approachable platform for you and your peers to explore and make your own judgements. We pride ourselves on being a service to our adventurous friends much like the NPS. "
          active={active}
          setActive={setActive}
        />
        <Accordion
          question="How do you know where I am located & why?"
          answer="We have utilized the Geolocation API provided by the developers at Google. Rest assured we only use this to display mile markers from your location, making your planning time and estimates full of ease."
          active={active}
          setActive={setActive}
        />
      </section>
    </Layout>
  );
}

export default FAQPage;
