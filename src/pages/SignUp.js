// pages/SignUp.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: '',
    grade: '',
    schoolName: '',
    schoolLocation: '',
    schoolPrincipal: '',
    careerAmbition: '',
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log('Form submitted:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">To sign Up please fill your details:</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name and Surname</Form.Label>
              <Form.Control 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required 
                placeholder="Enter your full name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control 
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                required 
                min="13"
                max="100"
                placeholder="Enter your age"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Grade</Form.Label>
              <Form.Control 
                type="number" 
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required 
                min="8"
                max="12"
                placeholder="Enter your grade"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>School Name</Form.Label>
          <Form.Control 
            type="text" 
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            required 
            placeholder="Enter your school name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>School Location</Form.Label>
          <Form.Control 
            type="text" 
            name="schoolLocation"
            value={formData.schoolLocation}
            onChange={handleChange}
            required 
            placeholder="Enter school location"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>School Principal</Form.Label>
          <Form.Control 
            type="text" 
            name="schoolPrincipal"
            value={formData.schoolPrincipal}
            onChange={handleChange}
            required 
            placeholder="Enter school principal's name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Career Ambition</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            name="careerAmbition"
            value={formData.careerAmbition}
            onChange={handleChange}
            required 
            placeholder="Describe your career ambitions"
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required 
                placeholder="Choose a username"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="Choose a password"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Sign Up
          </Button>
        </div>

        <div className="text-center mt-3">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;