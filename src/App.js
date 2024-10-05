import React from 'react'; // Import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import HomePage from './pages/Home'; // Import HomePage component
import PlantDetails from './pages/PlantSelection'; // Import PlantDetails component
import HeatMap from './components/HeatMap'; // Import HeatMap component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/:id" element={<PlantDetails />} />
        <Route path="/heatmap" element={<HeatMap />} />
      </Routes>
    </Router>
  );
}

export default App;
