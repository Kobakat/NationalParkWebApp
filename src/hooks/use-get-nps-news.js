import { useEffect, useState } from "react";

const API_KEY = "NE9daU857wylgvJNHNamHQjl8ReqlKDav0jFu5vu";

async function fetchJson() {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/newsreleases?limit=5&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(
      `Something went wrong, server responded with ${response.status}.`
    );
  }
  const json = await response.json();
  return json;
}

const useGetNpsNews = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const json = await fetchJson();
      setData(json.data);

    };

    getNews();
  }, []);

   return data;
};

export default useGetNpsNews;
