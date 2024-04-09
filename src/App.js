import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News'; 
import Research from './components/research'; 
import Publications from './components/Publications'; 
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/news" element={<News/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
