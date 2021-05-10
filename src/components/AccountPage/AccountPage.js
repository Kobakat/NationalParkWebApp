import React, { useEffect, useState } from "react";
import Layout from "../Globals/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { auth, usersCollection } from "../../firebase/firebase";
import useUser from "../../hooks/use-user";

import { Link } from "react-router-dom";

function AccountPage() {
  const [user] = useUser(auth);
  const [data, setData] = useState(null);
  useEffect(() => {
    const GetParks = async (user) => {
      if (user)
        try {
          const snapshot = await usersCollection
            .doc(user.uid)
            .collection("favoriteParks")
            .get();

          setData(snapshot);
          console.log(snapshot);
        } catch (err) {
          console.error(err);
        }
    };
    GetParks(user);
  }, [user]);

  let parkList;

  if (data) {
    parkList = data.docs.map((doc) => {
      return (
        <div key={doc.data().parkCode}>
          <button className="text-lg py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
            <Link to={`park/${doc.data().parkCode}`} key={doc.data().parkCode}>
              {doc.data().name}
            </Link>
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      {user ? (
        <Layout user={user}>
          <div className="m-auto lg:max-w-screen-lg mt-16">
            <h1 className="text-5xl m-4 text-rocky">My Account</h1>
            <Tabs>
              <div>
                <TabList>
                  <div className="flex gap-2 pb-4 flex-col lg:flex-row">
                    <div className="flex m-auto gap-6">
                      <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                        <button className="text-lg py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                          My Details
                        </button>
                      </Tab>
                      <Tab selectedClassName="bg-green-700 text-white rounded-lg">
                        <button className="text-lg py-4 px-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer w-full transition">
                          Favorites
                        </button>
                      </Tab>
                    </div>
                  </div>
                </TabList>
              </div>
              <TabPanel>
                <div className="bg-gray-100 rounded-xl p-3 max-w-xl m-auto shadow-lg mt-12">
                  <div className="flex gap-7">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <div>
                      <span className="text-gray-400 text-sm">Name</span>
                      <h4 className="text-green-800 text-lg">
                        {user ? user.displayName : "Loading..."}
                      </h4>
                      <span className="text-gray-400 text-sm">Email</span>
                      <h4 className="text-green-800 text-lg">{user.email}</h4>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>{parkList ? parkList : "No parks"}</TabPanel>
            </Tabs>
          </div>
        </Layout>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default AccountPage;
