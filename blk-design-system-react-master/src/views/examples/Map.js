import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const containerStyle = {
  width: '120vh',
  height: '75vh'
};

const center = {
  lat:42.46,
  lng: -71.439
};
let position = {
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

const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            defaultZoom={19}
            center={center}
            mapContainerStyle={containerStyle}
            onClick={props.onMapClick}
        >
            {props.isMarkerShown && <Marker position={props.markerPosition} />}

        </GoogleMap>
    )

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCStTMJl2QcIuEkTRGJyu-1TIO_46TcMaA"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}
