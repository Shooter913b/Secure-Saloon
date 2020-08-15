

import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat:  42.4600 ,
  lng:  -71.439
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
