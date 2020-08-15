

import React from 'react'
import { GoogleMap, LoadScript,Marker,DrawingManager,InfoWindow  } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat:  42.4600 ,
  lng:  -71.439
};

const position = {
  lat: 42.4600,
  lng: -71.439
}
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}


const onLoad = marker => {
  console.log('marker: ', marker)
}
const onDblClick = marker => {
  console.log('marker: ', marker)
}
const onRightClick	 =infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={19}
        id="marker-example"
        id="InfoWindow-example"


      >
        {


         }
         <Marker
      onLoad={onLoad}
      position={position}
    />
    <InfoWindow
     onLoad={onLoad}
     position={position}
   >
     <div style={divStyle}>
       <h6 className="Info-Box">InfoWindow</h6>
     </div>
   </InfoWindow>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
