import React from 'react';
import {Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

const DetailMachineMap = ({ google , locations}) => { 

  function onMarkerClick(props, marker, e) {
    
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
                title={'The marker`s title will appear as a tooltip.'}
                position={{ lat: item.lat_location, lng: item.lng_location }}
              />
            )
        } 
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(DetailMachineMap);
