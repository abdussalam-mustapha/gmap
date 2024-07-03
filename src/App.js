import React, { useState, useEffect } from 'react';
import "./App.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};

function App(props) {

  const [currentLocation, setCurrentLocation] = useState({ lat: 37.7749, lng: -122.4194 });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          setError(null);
        },
        (error) => {
          console.log(error);
          setError("Unable to retrieve your location");
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="App" style={{ height: '100vh', width: '100%' }}>
            {error && <p>{error}</p>}
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={currentLocation}
      >
        <Marker position={currentLocation} />
      </Map>

    </div>
  );
}



export default GoogleApiWrapper({
  apiKey: "AIzaSyByjTmKeSY_iDkv2qmn0U92cFcqvFgttEw",
})(App);