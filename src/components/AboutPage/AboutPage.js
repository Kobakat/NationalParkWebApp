import React from "react";
import Layout from "../Globals/Layout";

function AboutPage() {
  return (
    <Layout>
      <div class="m-auto lg:max-w-screen-lg mt-16">
        <div>
          <ul class="flex justify-center text-rocky hidden lg:flex">
            <li class="mx-6">
              <a href="#mission-section">Our Mission</a>
            </li>
            <li class="mx-6">
              <a href="#story-section">Our Story</a>
            </li>
            <li class="mx-6">
              <a href="#team-section">Our Team</a>
            </li>
            <li class="mx-6">
              <a href="#join-section">Join Us</a>
            </li>
          </ul>
        </div>
        <section
          id="mission-section"
          class="block flex flex-col text-center mt-16"
        >
          <h1 class="text-7xl m-4 text-rocky">Our Mission</h1>
          <h4 class="m-3 text-xl text-rocky">
            Keep National Parks open & accessible
          </h4>
          <p class="m-4 px-1 lg:px-28 font-body">
            Parkway is a website brought to you by people who know and love the
            outdoors and want to share the beauty that is the national park
            service in this country. Our mission is to provide quick and
            simplified access to park information and to expand the reaches of
            the National Park Service (NPS), so that more people can experience
            the and explore these historic parks with their family and friends.
          </p>
        </section>
        <section
          id="story-section"
          class="block flex flex-col text-center mt-48"
        >
          <h1 class="text-7xl m-4 text-rocky">Our Story</h1>
          <h4 class="m-4 text-xl text-rocky">100% remote, 4 guys & 1 idea</h4>
          <p class="m-4 px-8 lg:px-28 font-body">
            Parkway was an idea that four students at Columbia College Chicago
            set out to build whilst using the NPS API and other supplemental
            API's to provide accurate and visually appealing and hekpful
            information to regular park enthusiasts. We at Parkway wanted to
            build something that was accessible from the comforts of your home
            or on the go on your mobile device.
          </p>
          <p class="m-4 px-8 lg:px-28 font-body">
            As a mixture of development and design we had crafted the perfect
            group and the perfect workflow to accomplish what we had set out to
            do. Giving a special shoutout to Michael Hadley for assiting us
            along the ride of this project and providing us with excellent
            documentation and tips on user interaction. The team is very excited
            about Parkway and hope to continue to optimize and build this
            platform up.
          </p>
        </section>
        <section id="team-section" class="block text-center mt-48">
          <h1 class="text-7xl m-4 text-center text-rocky">Our Team</h1>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-6 mt-16">
            <figure class="flex flex-col">
              <img
                src="https://avatars.githubusercontent.com/u/44333523?v=4"
                alt=""
              />
              <figcaption class="font-extrabold text-xl mt-4">
                Tyler Morales <br />
                <span class="font-normal text-xs font-body">
                  Front End Developer & Designer
                </span>
              </figcaption>
            </figure>
            <figure class="flex flex-col">
              <img
                src="https://avatars.githubusercontent.com/u/44657893?v=4"
                alt=""
              />
              <figcaption class="font-extrabold text-xl mt-4">
                Sneh Mehta <br />
                <span class="font-normal text-xs font-body">
                  Front End Developer & Designer
                </span>
              </figcaption>
            </figure>
            <figure class="flex flex-col">
              <img
                src="https://cdn.discordapp.com/attachments/635908938830708747/835966005288632320/20181231_221935_adobespark.jpeg"
                alt=""
              />
              <figcaption class="font-extrabold text-xl mt-4">
                Rafael Santana <br />
                <span class="font-normal text-xs font-body">
                  Back End Developer
                </span>
              </figcaption>
            </figure>
            <figure class="flex flex-col">
              <img
                src="https://avatars.githubusercontent.com/u/54965702?v=4"
                alt=""
              />
              <figcaption class="font-extrabold text-xl mt-4">
                Brendan Lineau <br />
                <span class="font-normal text-xs font-body">
                  Back End Developer
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="join-section"
          class="block flex flex-col text-center mt-48 mb-48"
        >
          <h1 class="text-7xl m-4 text-rocky">Join Us</h1>
          <p class="m-4 px-8 lg:px-28 font-body">
            The team at Parkway embrace the idea of open source software use and
            contributions. With that in mind we have a public facing repository
            that anyone can access, fork and/or clone to make individual
            contributions. We enocurage it and will actively take a look at pull
            requests and feature additions. Please feel free to contact anyone
            of the members of the team!{" "}
            <span class="font-extrabold text-rocky">
              Check out the code base below!
            </span>
          </p>
          <a
            class="text-xl mt-4"
            href="https://github.com/Kobakat/NationalParkWebApp"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </section>

        <section
          id="join-section"
          class="block flex flex-col text-center mt-48 mb-48"
        >
          <h1 class="text-7xl m-4 text-rocky">Contact Us</h1>
          <p class="m-4 px-8 lg:px28 font-body">
            If you have any other questions please feel free to contact this
            definitely legit email: <br />{" "}
            <address class="mt-4">
              <a href="mailto:Parkway@outdoors.com">Parkway@outdoors.com</a>
            </address>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default AboutPage;
