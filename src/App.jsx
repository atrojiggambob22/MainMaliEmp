import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MaliEmpMain from './MaliEmpMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FestivalDrumbeat from './FestivalDrumbeat';
import RoyalCourt from './RoyalCourt';
import TheGoldenRoute from './TheGoldenRoute';
import DressLikeRoyalty from './DressLikeRoyalty';
import SecureYourSpot from './SecureYourSpot'
import TheMusaProject from './TheMusaProject';
function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <Routes>
        <Route path="/" element={<MaliEmpMain />} />
        <Route path="/FestivalDrumbeat" element={<FestivalDrumbeat />} />
        <Route path="/RoyalCourt" element={<RoyalCourt />} />
        <Route path="/TheGoldenRoute" element={<TheGoldenRoute />} />
        <Route path="/TheMusaProject" element={<TheMusaProject />} />

        <Route path="/DressLikeRoyalty" element={<DressLikeRoyalty />} />

        <Route path="/SecureYourSpot" element={<SecureYourSpot />} />
      </Routes>
    </Router>
  )
}

export default App
