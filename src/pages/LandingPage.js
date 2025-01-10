// pages/LandingPage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPages.css';  // We'll create this CSS file

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <img src="/logo.png" alt="Logo" className="mb-4" style={{ width: '200px' }} />
      <h1 className="mb-4">Welcome to your Career Community</h1>
      <div>
        <Button 
          variant="success" 
          className="custom-btn me-3" 
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
        <Button 
          variant="outline-success" 
          className="custom-btn" 
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      </div>
    </Container>
  );
}

export default LandingPage;