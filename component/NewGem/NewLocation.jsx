// File: component/NewGem/NewLocation.jsx
import React from "react";
import MapView from "./MapView"; // Import the MapView component

const NewLocation = () => {
  return (
    <div>
      <h1>New Location</h1>
      {/* Render the MapView component */}
      <MapView />
      {/* Add your form or other content for adding a new location here */}
    </div>
  );
};

export default NewLocation;
