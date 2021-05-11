import React from "react";
import Layout from "../Globals/Layout";
import CardGrid from "./CardGrid";
import Columns from "./Columns";

function ParksPage() {
  return (
    <Layout>
      <section class="block flex flex-col text-center">
        <h1 class="text-7xl m-4 text-rocky">Parks</h1>
        <h4 class="text-xl text-rocky">National Parks</h4>
      </section>

      {/* Mapbox Map Goes Here */}

      {/* Grid of Nearest Parks */}
      <CardGrid />

      <Columns />

      {/* List of All Parks starts here after horizontal line do a batch of 50 in 4 columns */}
      <hr class="m-auto lg:max-w-screen-lg" />
    </Layout>
  );
}

export default ParksPage;
