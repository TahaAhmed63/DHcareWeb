import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import mypinlogo from "./../../assest/New_Project__5_-removebg-preview (3).png"
// Define container style for the map
const containerStyle = {
  width: '90%',
  height: '400px',
  margin:'0 auto'
};

// Set the center location for the map
const center = {
  lat: 40.712583173211684, // Example latitude
  lng: -73.78787846731848 // Example longitude
};

// Your component
const MyMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBbsD83ukC7PtomkuQlkUM0G9MX9b0CccI', // Replace with your API key
  });

  // Check if the API script has finished loading
  if (!isLoaded) {
    return <div>Loading...</div>; // You can customize this loading screen
  }

  return (
 <div className="container my-5 ">
       <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Set appropriate zoom level
    >
        {/* Marker at the specified location */}
        <Marker
          position={center}
          // label="DHCARE" // Example label
          icon={{
            url: mypinlogo, // Optional: Custom marker icon
            scaledSize: new window.google.maps.Size(77, 77) // Resize marker icon
          }}
        />
      </GoogleMap>
</div>
  );
};

export default MyMapComponent;
