import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const defaultMap = {
  width: '100%',
  height: '400px',
  borderRadius: '.75rem',
}
const stickyMap = {
  width: '100%',
  height: 'calc(100vh - 150px)',
  borderRadius: '.75rem',
  position: 'sticky',
  top: '10px',
}

const MapboxGLMap = ({ lon, lat, coordinates, mapType }) => {
  console.log(lon, lat, coordinates)
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    // console.log(coordinates)
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA'
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [lon, lat], // starting position [lng, lat]
        zoom: 4,
      })

      // Create a default Marker and add it to the map.
      coordinates.forEach((coordinate) => {
        new mapboxgl.Marker()
          .setLngLat([+coordinate.longitude, +coordinate.latitude])
          .addTo(map)
      })

      // map.on('load', () => {
      //   console.log(lon, lat, coordinates)
      //   setMap(map)
      //   map.resize()
      // coordinates.forEach((coordinate) => {
      //     console.log('Hello world 🌎')
      //     new mapboxgl.Marker()
      //       .setLngLat([+coordinate.longitude, +coordinate.latitude])
      //       .addTo(map)
      // })
      // })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map, lat, lon, coordinates])

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={mapType === 'stickyMap' ? stickyMap : defaultMap}
    />
  )
}

export default MapboxGLMap
