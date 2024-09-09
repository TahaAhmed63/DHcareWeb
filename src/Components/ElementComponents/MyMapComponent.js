import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import mypinlogo from "./../../assest/New_Project__5_-removebg-preview (3).png"

// Define container style for the map
const containerStyle = {
  width: '100%',
  height: '450px',
  margin:'0 auto'
};

// Set the center location for the map
const center = {
  lat: 40.712583173211684, // Example latitude
  lng: -73.78787846731848 // Example longitude
};

// Define the color scheme for the map
const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#a8c294' // This is the primary color
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff' // This is the secondary color
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a8c294' // This is the primary color
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3ce' // This is a light gray color
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a8c294' // This is the primary color
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff' // This is the secondary color
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a8c294' // This is the primary color
      }
    ]
  }
];

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
        options={{
          styles: mapStyles // Apply the custom color scheme
        }}
      >
        {/* Marker at the specified location */}
        <Marker
          position={center}
          // label="DHCARE" // Example label
          icon={{
            url: mypinlogo, // Optional: Custom marker icon
            scaledSize: new window.google.maps.Size(77, 103) // Resize marker icon
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default MyMapComponent;