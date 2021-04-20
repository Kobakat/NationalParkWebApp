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

const MapboxGLMap = ({ lon, lat, mapType }) => {
  console.log(mapType)
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA'
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [lon, lat], // starting position [lng, lat]
        zoom: 7,
      })

      map.on('load', () => {
        setMap(map)
        map.resize()
        new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map)
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map, lat, lon])

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={mapType === 'stickyMap' ? stickyMap : defaultMap}
    />
  )
}

export default MapboxGLMap
