import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage';
import LearnAbout from './pages/LearnAbout';
import Competition from './pages/Competition';
import ContactForm from './pages/ContactForm';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learnabout" element={<LearnAbout />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
