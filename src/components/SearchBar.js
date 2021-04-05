import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import MultiSelect from 'react-multi-select-component'
// import 'react-tabs/style/react-tabs.css'

const SearchBar = () => {
  const options = [
    { label: 'Yellowstone National Park', value: '1' },
    { label: 'Arcadia National Park', value: '2' },
  ]

  const [selected, setSelected] = useState([])

  return (
    <div class="bg-white min-h-28 w-4/5 m-auto py-8 px-8 rounded-2xl border-2 border-gray-100 shadow-lg">
      <Tabs>
        <div class="border-b-2">
          <TabList>
            <div class="flex gap-2 pb-4">
              <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                <button class="py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-42 transition">
                  Park Name
                </button>
              </Tab>
              <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                <button class="py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-42 transition">
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
            <div class="flex gap-4">
              <MultiSelect
                class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
              <button class="text-white bg-green-700 hover:bg-green-500 focus:bg-green-500 py-4 px-10 rounded-lg transition">
                Search
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div class="flex gap-4 pt-6 items-end">
            <div class="flex flex-col gap-4 w-full content-end">
              {/* state */}
              <label class="text-green-700" htmlFor="park-name">
                State
              </label>
              <div class="flex gap-4 h-full">
                <MultiSelect
                  class="bg-gray-100 p-3 w-full rounded-3xl pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  options={options}
                  value={selected}
                  onChange={setSelected}
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
                  options={options}
                  value={selected}
                  onChange={setSelected}
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
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>
            <button class="text-white bg-green-700 hover:bg-green-500 focus:bg-green-500 py-4 px-10 rounded-lg transition">
              Search
            </button>
          </div>
        </TabPanel>
      </Tabs>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
    </div>
  )
}

export default SearchBar
