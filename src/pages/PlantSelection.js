// src/pages/PlantSelection.js

import React, { useState } from 'react';
import Search from '../components/Search';
import PlantDetails from '../components/PlantDetails';
import HeatMap from '../components/HeatMap';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const PlantSelection = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [heatmapData, setHeatmapData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError('');

    try {
      const plantsRef = collection(db, 'plants');
      const q = query(plantsRef, where('name', '==', searchQuery));
      const querySnapshot = await getDocs(q);
      
      const plantData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      if (plantData.length > 0) {
        setSelectedPlant(plantData[0]); // Select the first plant found
        setHeatmapData([
          { lat: 10.0, lng: 10.0, intensity: 1 },
          { lat: 15.0, lng: 15.0, intensity: 2 },
          // Add more coordinates as necessary
        ]);
      } else {
        setError('No plants found. Please try a different search.');
        setSelectedPlant(null);
      }
    } catch (error) {
      console.error("Error fetching plants:", error);
      setError('An error occurred while fetching plant data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Search onSearch={handleSearch} />
      
      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {selectedPlant && (
        <div className="mt-6">
          <PlantDetails plant={selectedPlant} />
        </div>
      )}
      
      <div className="mt-6">
        <HeatMap heatmapData={heatmapData} />
      </div>
    </div>
  );
};

export default PlantSelection;
