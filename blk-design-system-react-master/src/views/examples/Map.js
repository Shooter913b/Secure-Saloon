import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '120vh',
  height: '80vh'
};

const center = {
  lat:42.46,
  lng: -71.439
};
const position = {
  lat: 42.46,
  lng: -71.439
}
const onLoad = marker => {
  console.log('marker: ', marker)
}
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}


function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA"
    >
      <GoogleMap
      id="marker-example"
   mapContainerStyle={containerStyle}
   zoom={19.5}
   center={center}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker
      onLoad={onLoad}
      position={position}
    />
    <InfoWindow
     onLoad={onLoad}
     position={position}
   >
     <div style={divStyle}>
       <h1>InfoWindow</h1>
     </div>
   </InfoWindow>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
