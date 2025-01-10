import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import HelpDesk from './pages/HelpDesk';
import Friends from './pages/Friends';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/home" 
            element={
              <>
                <Navbar />
                <Home />
              </>
            } 
          />
          <Route
             path="/help"
             element={
              <>
                <Navbar />
                <HelpDesk />
              </>
             }
              />

          <Route
            path='/friends'
            element={
              <>
              <Navbar />
              <Friends />
              </>
            }
          
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;