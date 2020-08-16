import React from 'react'
import { GoogleMap, LoadScript,DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat:42.46,
  lng: -71.439
};

const onLoad = drawingManager => {
  console.log(drawingManager)
}

const onPolygonComplete = polygon => {
  console.log(polygon)
}

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
      googleMapsApiKey="AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
         id="drawing-manager-example"
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <DrawingManager
      onLoad={onLoad}
      onPolygonComplete={onPolygonComplete}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
