import "./App.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};

function App(props) {
  return (
    <div className="App">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194,
        }}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </Map>
    </div>
  );
}



export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(App);