import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
process.env.REACT_NAV_LOGGING = false;
const containerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAyXZ92_9GLBanweL_GLIt3PfkVeEWsy5E"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
