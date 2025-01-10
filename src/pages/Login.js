import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/home');
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Welcome to Your Career Community</h2>
      <Form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            required 
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            required 
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>

        <div className="text-center mt-3">
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
