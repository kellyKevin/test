// src/components/HeatMap.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

const HeatMapLayer = ({ heatmapData }) => {
  const map = useMap();

  useEffect(() => {
    const heatLayer = L.heatLayer(heatmapData, { radius: 25 }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [heatmapData, map]);

  return null; // No UI to render, just a side effect
};

const HeatMap = () => {
  const [heatmapData, setHeatmapData] = useState([
    [51.505, -0.09], // Example coordinates
    [51.51, -0.1],
    [51.51, -0.11],
  ]);
  
  const [loading, setLoading] = useState(true);

  // Sample function to simulate fetching or updating heatmap data
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = e.target.elements.data.value
      .split(',')
      .map(coord => coord.split(':').map(Number)); // Format: "lat:lng"

    setHeatmapData(newData);
    setLoading(false);
  };

  useEffect(() => {
    if (heatmapData.length > 0) {
      setLoading(false); // Data is now available, stop loading
    }
  }, [heatmapData]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="text"
          name="data"
          placeholder="Enter coordinates (lat:lng,...)"
          className="p-2 border rounded mr-2"
        />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded">
          Update Heatmap
        </button>
      </form>

      {loading ? (
        <div className="text-center p-4">Loading heatmap...</div>
      ) : (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <HeatMapLayer heatmapData={heatmapData} />
        </MapContainer>
      )}
    </div>
  );
};

export default HeatMap;
