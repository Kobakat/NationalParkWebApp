import React from 'react'
import Layout from '../Globals/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

function AccountPage() {
  return (
    <Layout>
      <div class="m-auto lg:max-w-screen-lg mt-16">
        <h1 class="text-5xl m-4 text-rocky">My Account</h1>

        <Tabs>
          <div>
            <TabList>
              <div class="flex gap-2 pb-4 flex-col lg:flex-row">
                <div class="flex m-auto gap-6">
                  <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                    <button class="text-lg py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                      My Details
                    </button>
                  </Tab>
                  <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                    <button class="text-lg py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                      Favorites
                    </button>
                  </Tab>
                </div>
              </div>
            </TabList>
          </div>

          <TabPanel>
            <div class="bg-gray-100 rounded-xl p-3 max-w-xl m-auto shadow-lg mt-12">
              <div class="flex gap-7">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://github.com/Kobakat.png"
                  alt=""
                />
                <div>
                  <span class="text-gray-400 text-sm">Name</span>
                  <h4 class="text-green-800 text-lg">John Dope</h4>
                  <span class="text-gray-400 text-sm">Email</span>
                  <h4 class="text-green-800 text-lg">johndope@gmail.com</h4>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </Layout>
  )
}

export default AccountPage
