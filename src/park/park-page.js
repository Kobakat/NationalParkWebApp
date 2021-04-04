import "./park-page.css";
import { useState, useEffect } from "react";
import getPark from "./get-park";

function ParkPage({ parkCode }) {
  const [parkFetch, setParkFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function loadPark() {
      setParkFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      try {
        const park = await getPark(parkCode);
        setParkFetch({
          isLoading: false,
          errorMessage: "",
          data: park,
        });


      } catch (err) {
        setParkFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong loading the park. Please try again later.",
          data: null,
        });
      }
    }
    loadPark();
    
  }, []);

  const { isLoading, errorMessage, data } = parkFetch;
  


  

  let contents;
  if (isLoading) {
    contents = <div>Loading Park</div>;
  } else if (errorMessage !== "") {
    contents = <div>{errorMessage}</div>;
  } else {
    const [fullName, description, topics, activities, addresses, weatherInfo, images] = data;
    contents = (
      <div>
        <h1>{fullName}</h1>
        <h4>{description}</h4>
        <div>{weatherInfo}</div>
        <img src={images[0].url} width="20%" />

      </div>
    );
  }

  return contents;
}

export default ParkPage;
 