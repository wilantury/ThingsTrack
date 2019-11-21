import React from 'react';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const DetailMachineMap = ({ google }) => { 

  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{ lat: 4.860948, lng: -74.059635 }}
    >
      <Marker
        position={{ lat: 4.860948, lng: -74.059635 }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(DetailMachineMap);
