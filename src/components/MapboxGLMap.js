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
  // const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA'

    // const initializeMap = ({ setMap, mapContainer }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-98.5, 39.8], // starting position [lng, lat]
      zoom: 5,
    })

    map.on('loaded', function () {
      map.addLayer({
        id: 'raster-layer',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [
            'https://api.mapbox.com/v4/{tileset_id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHlsZXItbW9yYWxlcyIsImEiOiJja25ubGE4dncwcWlzMndvOXFnNW9obTF0In0.7V5r5-1fbaLsYcTEHwAvvA',
          ],
        },
        minzoom: 0,
        maxzoom: 22,
      })
    })

    // LOOP through each park and create a new marker
    coordinates.forEach((coordinate) => {
      new mapboxgl.Marker()
        .setLngLat([+coordinate.longitude, +coordinate.latitude])
        .addTo(map)
    })

    map.on('sourcedataloading', () => {
      console.log(+coordinates[0].longitude, +coordinates[0].latitude)
      map.flyTo({
        center: [+coordinates[0].longitude, +coordinates[0].latitude], // starting position [lng, lat]
      })
    })
    // }

    // if (!map) initializeMap({ setMap, mapContainer })
  }, [lat, lon, coordinates])

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={mapType === 'stickyMap' ? stickyMap : defaultMap}
    />
  )
}

export default MapboxGLMap
