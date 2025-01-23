import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase-config';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error , setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if(!email || !password){
      setError("Both username and password are required!");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);

    const auth = getAuth(app);
    try {
       await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in Successfully!");
 
      // after login page will be directed to the home page
    navigate('/home');
    } catch (error) {
      console.log('Error during login:', error.message)
       // Display Firebase-specific error messages
       if (error.code === 'auth/invalid-email') {
        setError('The email address is not valid.');
      } else if (error.code === 'auth/user-disabled') {
        setError('The user account has been disabled.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setError('The password you entered is incorrect.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
    
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Login to your account:</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </Form.Group>

        {error && <div className="text-danger mb-3">{error}</div>}

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Login
          </Button>
        </div>

        <div className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up here</a>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
