// src/components/PlantDetails.js

import React from 'react';

const PlantDetails = ({ plant }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl">{plant.name}</h2>
      <p>Soil pH: {plant.soilPh}</p>
      <p>Rainfall: {plant.rainfall} mm</p>
      <p>Growth Duration: {plant.growthDuration} days</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlantDetails;
