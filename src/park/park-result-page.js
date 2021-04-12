import getResults from "./get-results";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ParkResultPage({ search }) {
  const [resultFetch, setResultFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  const { query } = search;
  const { activities, topics, states } = search;

  const filters = {
    activities: activities,
    topics: topics,
    states: states,
  };

  useEffect(() => {
    async function fetchResults() {
      setResultFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      try {
        const results = await getResults(query, filters);
        setResultFetch({
          isLoading: false,
          errorMessage: "",
          data: results,
        });
      } catch (err) {
        setResultFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the park. Please try again later.",
          data: null,
        });
      }
    }
    fetchResults();
  }, []);

  let content;
  const { data } = resultFetch;
  if (data !== null) {
    content = data.map((parks) => {
      return (
        <div key={parks.id}>
          <Link to={`park/${parks.parkCode}`}>
            <button>{parks.fullName}</button>
          </Link>
        </div>
      );
    });
  }
  return <div>{content}</div>;
}

export default ParkResultPage;
