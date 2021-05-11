import React from "react";

// TODO make parameters to pass in similar to what you did for events page. For eventual data if geolocation and distance is achievable
// Add Hover transform y on all the cards to make them bob up when you hover over them
// Figure out how you will do the parameters on each seperate card if the whole card is one component -- Maybe ID's?

function CardGrid() {
  return (
    <section class="m-auto md:max-w-screen-md mt-8">
      <div class="grid grid-cols-columns grid-rows-rows gap-4 justify-center m-6">
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <div class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </div>
        </div>
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <div class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </div>
        </div>
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <div class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </div>
        </div>
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <div class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </div>
        </div>
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <div class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </div>
        </div>
        <div class="rounded-2xl bg-sandRock relative">
          <p class="p-4 text-xl">Yellowstone National Park</p>
          <button class="absolute right-0 bottom-0 bg-grass text-white rounded-2xl p-2 mr-2 mb-2">
            # Miles Away
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
