import React, { useState } from 'react';
import {Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

const DetailMachineMap = ({ google , locations}) => { 

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');

    setCurrent({
      isLocated: true,
      lng: crd.longitude,
      lat: crd.latitude,
    });
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
  
  const [windowInfo, setValues] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  })

  const [currentLocation, setCurrent] = useState({
    isLocated: false,
    lng:{},
    lat: {},
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
      zoom={12}
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
        {currentLocation.isLocated && 
          <Marker
            name={'home'}
            title={'my location'}
            onClick={onMarkerClick}
            position={{ lat: currentLocation.lat, lng: currentLocation.lng}}
          />
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
