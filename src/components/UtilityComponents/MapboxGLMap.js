import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const defaultMap = {
  width: "100%",
  height: "400px",
  borderRadius: ".75rem",
};
const stickyMap = {
  width: "100%",
  height: "calc(100vh - 150px)",
  borderRadius: ".75rem",
  position: "sticky",
  top: "10px",
};

const MapboxGLMap = ({ coordinates, mapType }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidHlsZXItbW9yYWxlcyIsImEiOiJja25ubTUzejcxMDFoMnBtbzVkcmN6djloIn0.Zj23iZSmEDSEHnOwmLcR_g";

    // INITIALIZE mapbox
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-98.5, 39.8], // starting position [lng, lat]
      zoom: 5,
    });

    // LOOP through each park and create a new marker
    coordinates.forEach((coordinate) => {
      new mapboxgl.Marker()
        .setLngLat([+coordinate.longitude, +coordinate.latitude])
        .addTo(map);
    });

    // SWITCH to first coordinte in array of coordinates as center
    // TODO: make center the true center of all points & set zoom level to match radius of all points
    map.on("sourcedataloading", () => {
      // console.log(+coordinates[0].longitude, +coordinates[0].latitude)
      map.flyTo({
        center: [+coordinates[0].longitude, +coordinates[0].latitude], // starting position [lng, lat]
      });
    });
    // }
  }, [coordinates, mapType]);

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={mapType === "stickyMap" ? stickyMap : defaultMap}
    />
  );
};

export default MapboxGLMap;
