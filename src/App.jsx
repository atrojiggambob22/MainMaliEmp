import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loader from './Loader'
import HomePage from './HomePage';
import './App.css'
import MaliEmpMain from './MaliEmpMain'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FestivalDrumbeat from './FestivalDrumbeat';
import RoyalCourt from './RoyalCourt';
import TheGoldenRoute from './TheGoldenRoute';
import DressLikeRoyalty from './DressLikeRoyalty';
import SecureYourSpot from './SecureYourSpot'
import TheMusaProject from './TheMusaProject';
import RoyalFest from './RoyalFest';
// import Loader from './Loader';

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay for demo (remove this in production)
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [location]);

  const [count, setCount] = useState(0)

  return (
    <>
    {loading && <Loader />}
   
      <Routes>
        <Route path="/" element={<MaliEmpMain />} />
        <Route path="/FestivalDrumbeat" element={<FestivalDrumbeat />} />
        <Route path="/RoyalCourt" element={<RoyalCourt />} />
        <Route path="/TheGoldenRoute" element={<TheGoldenRoute />} />
        <Route path="/TheMusaProject" element={<TheMusaProject />} />
        
        <Route path="/RoyalFest" element={<RoyalFest />} />

        <Route path="/DressLikeRoyalty" element={<DressLikeRoyalty />} />

        <Route path="/SecureYourSpot" element={<SecureYourSpot />} />
        
      </Routes>
  
    {/* <HomePage/> */}
    {/* <Loader/> */}
    </>

  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
