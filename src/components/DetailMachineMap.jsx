import React, { useState } from 'react';
import {Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

const DetailMachineMap = ({ google , locations}) => { 

  const [windowInfo, setValues] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  })

  function onMarkerClick(props, marker, e) {
    setValues({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };
  return (
    <Map
      google={google}
      zoom={11}
      initialCenter={{ lat: locations[0].lat_location, lng: locations[0].lng_location }}
    >
        {
          locations.map( item =>
              <Marker
                key={item.id}
                onClick={onMarkerClick}
                name={item.thing_name}
                title={item.address}
                position={{ lat: item.lat_location, lng: item.lng_location }}
              />
            )
        }

        <InfoWindow
          marker={windowInfo.activeMarker}
          visible={windowInfo.showingInfoWindow}>
            <div>
              <h1>{windowInfo.selectedPlace.name}</h1>
              <h3>{windowInfo.selectedPlace.title}</h3>
            </div>
        </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(DetailMachineMap);
