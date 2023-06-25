import React from 'react';
import Landing from './components/landing'
import Splash from './components/Splash'
import Home from './components/home'
import Description from './components/Newsfeed/desc'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={< Splash/>} />
      <Route path="/landing"  element={<Landing />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/home/desc"  element={<Description />} />
      
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
