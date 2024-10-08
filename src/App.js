import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css'; // Make sure to create and import a CSS file for any global styles
import Contact from './components/Contact';
import Services from './components/Services';
import Xogame from './components/Xogame';
// import Propsample from './components/Props';
// import Class from './components/Class';
// import Promize from './components/Promize';
import SnakeLadder from './components/SnakeLadder';
import Sps from './components/Sps';

const App = () => {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Services />} />
          <Route path='/xo-game' element={<Xogame/>} />
          {/* <Route path='/props' element={<Propsample  isProps={false} cars={["BMS","BENZ","AUDI","THAR"]} />} /> */}
          {/* <Route path='/display' element={<Class name = {"hello"} />} /> */}
          {/* <Route path='/promise' element={<Promize />} /> */}
          <Route path='/S&L-game' element={<SnakeLadder />} />
          <Route path='/sps' element={<Sps />} />


        </Routes>
      </Router>
    </div>
  );
};

export default App;
