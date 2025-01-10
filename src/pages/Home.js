import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function Home() {
    const userData = {
        name: "John Doe",
        grade: "11",
        school: "PE High Shcool",
        profileImage: "/student.png" // Default to null if no image uploaded
      };

  return (
    <Container fluid className="mt-5 pt-4">
      <Row>
        {/* Left Column */}
        <Col md={3}>
          
        <Card className="mb-4">
            <Card.Body className="text-center">
              {userData.profileImage ? (
                <img 
                  src={userData.profileImage} 
                  alt="Profile" 
                  className="rounded-circle mb-3"
                  style={{ width: '120px', height: '120px' }}
                />
              ) : (
                <FaUserCircle size={120} className="mb-3 text-secondary" />
              )}
              <h5>{userData.name}</h5>
              <p>Grade: {userData.grade}</p>
              <p>School: {userData.school}</p>
              <Button variant="outline-primary" href="/profile" size="sm">
                Update Profile
              </Button>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Body>
              <h5>Career Updates</h5>
              {/* Add career updates content */}
            </Card.Body>
          </Card>
        </Col>

        {/* Middle Column */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h5>News Updates</h5>
              {/* Add news content */}
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5>Sponsor Information</h5>
              {/* Add sponsor content */}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column */}
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h6>Learn to play chess</h6>
              <a href="/chess" className="btn btn-sm btn-outline-primary">Learn More</a>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <h6>Coding Bootcamps</h6>
              <a href="/bootcamps" className="btn btn-sm btn-outline-primary">Explore</a>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <h6>Take a Survey</h6>
              <a href="/survey" className="btn btn-sm btn-outline-primary">Start Survey</a>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <h6>K53 Learners Practice</h6>
              <a href="/k53" className="btn btn-sm btn-outline-primary">Start Practice</a>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <h6>Add to your Feed</h6>
              <a href="/feed" className="btn btn-sm btn-outline-primary">Customize</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;