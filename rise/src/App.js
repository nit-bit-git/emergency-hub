import React from 'react';
import Landing from './components/landing'
import Splash from './components/Splash'
import Home from './components/home'
import Report from './components/Report/Report'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={< Splash/>} />
      <Route path="/landing"  element={<Landing />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/Report/Report"  element={<Report />} />
      
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
