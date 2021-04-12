import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getActivities, getTopics, getStates } from "./get-filters";
import MultiSelect from "react-multi-select-component";
import useGetNPSData from "../hooks/use-get-nps-data";

function SearchBar() {
  const [states, setStates] = useState([]);
  const [activities, setActivities] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function SearchParameters() {
      try {
        const stateArray = getStates();
        const activityArray = await getActivities();
        const topicArray = await getTopics();

        setStates(stateArray);
        setActivities(activityArray);
        setTopics(topicArray);
      } catch (err) {}
    }
    SearchParameters();
  }, []);

  const [selectedParks, setSelectedParks] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  let selection = JSON.stringify(
    [selectedParks, selectedStates, selectedActivities, selectedTopics].flat()
  );

  console.log(selection);

  return (
    <div class="bg-white min-h-28 w-4/5 m-auto py-8 px-8 rounded-2xl border-2 border-gray-100 shadow-lg">
      <Tabs>
        <div class="border-b-2">
          <TabList>
            <div class="flex gap-2 pb-4 flex-col lg:flex-row text-center">
              <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                <button class="py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                  Park Name
                </button>
              </Tab>
              <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                <button class="py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                  Filter
                </button>
              </Tab>
            </div>
          </TabList>
        </div>

        <TabPanel>
          <div class="flex flex-col gap-4 pt-6">
            <label class="text-green-700" htmlFor="park-name">
              Park Name
            </label>
            <div class="flex gap-4 flex-col lg:flex-row">
              <MultiSelect
                class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                options={"Test"}
                value={selectedParks}
                onChange={setSelectedParks}
                labelledBy="Select"
              />
              <Link to="/results">
                <button class="text-white bg-green-700 hover:bg-green-500 focus:bg-green-500 py-4 px-10 rounded-lg transition">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div class="flex gap-4 pt-6 items-end flex-col lg:flex-row">
            <div class="flex flex-col gap-4 w-full content-end">
              {/* state */}
              <label class="text-green-700" htmlFor="park-name">
                State
              </label>
              <div class="flex gap-4 h-full">
                <MultiSelect
                  class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  options={states}
                  value={selectedStates}
                  onChange={setSelectedStates}
                  labelledBy="Select"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 w-full">
              {/* activity */}
              <label class="text-green-700" htmlFor="park-name">
                Activity
              </label>
              <div class="flex gap-4 h-full">
                <MultiSelect
                  class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  options={activities}
                  value={selectedActivities}
                  onChange={setSelectedActivities}
                  labelledBy="Select"
                />
              </div>
            </div>
            <div class="flex flex-col gap-4 w-full">
              {/* topic */}
              <label class="text-green-700" htmlFor="park-name">
                Topic
              </label>
              <div class="flex gap-4 h-full">
                <MultiSelect
                  class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  options={topics}
                  value={selectedTopics}
                  onChange={setSelectedTopics}
                  labelledBy="Select"
                />
              </div>
            </div>
            <Link to="/results">
              <button class="text-white bg-green-700 hover:bg-green-500 focus:bg-green-500 py-4 px-10 rounded-lg transition">
                Search
              </button>
            </Link>
          </div>
        </TabPanel>
        <p class="text-center mt-6 text-sm text-gray-300 hover:text-black transition">
          Feel free to select as many or as few options as necessary
        </p>
      </Tabs>
    </div>
  );
}

export default SearchBar;
