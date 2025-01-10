// pages/HelpDesk.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FaUserCircle, FaPaperPlane } from 'react-icons/fa';

function HelpDesk() {
  const [chatMessage, setChatMessage] = useState('');
  
  // Sample user data (in real app, this would come from your auth system)
  const userData = {
    name: "John Doe",
    grade: "11",
    school: "PE High School",
    profileImage:"/student.png"// Default to null if no image uploaded
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "How do I apply for a bursary?",
      answer: "To apply for a bursary, you need to first check your eligibility on our Bursary page. Make sure you have your latest academic results and ID document ready. Follow the application process outlined for each specific bursary."
    },
    {
      question: "What documents do I need for NSFAS?",
      answer: "For NSFAS applications, you need: Your South African ID, your parents' IDs, proof of income (if applicable), latest academic results, and proof of residence."
    },
    {
      question: "How can I change my career path?",
      answer: "You can change your career path by visiting the Career Room section, taking our career assessment test, and consulting with our career guidance counselors. We'll help you explore different options based on your interests and abilities."
    }
  ];

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

          {/* NSFAS Logo and Link */}
          <Card className="mb-4">
            <Card.Body className="text-center">
              <a href="https://www.nsfas.org.za" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/NSFAS-logo.jpg" 
                  alt="NSFAS"
                  className="img-fluid mb-2"
                />
                <p>Visit NSFAS Website</p>
              </a>
            </Card.Body>
          </Card>

          {/* LoveLife Logo and Link */}
          <Card className="mb-4">
            <Card.Body className="text-center">
              <a href="https://lovelife.org.za" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/loveLife.jpg" 
                  alt="LoveLife"
                  className="img-fluid mb-2"
                />
                <p>Visit LoveLife Website</p>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Middle Column */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h5>SASSA Assistance</h5>
              <p>Learn more about SASSA and how they can assist you with various grants and support programs.</p>
              <Button 
                variant="primary" 
                href="https://www.sassa.gov.za" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit SASSA Website
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5>Mental Health Assessment</h5>
              <p>Do you know what mental health is? Answer the questionnaire and learn more about mental health and how to manage it.</p>
              <Button variant="primary" href="/mental-health-questionnaire">
                Take Mental Health Quiz
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5>Career Path Assessment</h5>
              <p>Do you know what career path to take? Answer the following questionnaire and learn which career will suit you best.</p>
              <Button variant="primary" href="/career-questionnaire">
                Take Career Quiz
              </Button>
            </Card.Body>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Frequently Asked Questions</h5>
            </Card.Header>
            <Card.Body>
              <Accordion>
                {faqs.map((faq, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column - Help Desk Chat */}
        <Col md={3}>
          <Card className="chat-window">
            <Card.Header>
              <h5 className="mb-0">Chat with Help Desk</h5>
            </Card.Header>
            <Card.Body className="chat-body" style={{ height: '400px', overflowY: 'auto' }}>
              <div className="chat-messages">
                {/* Chat messages would appear here */}
                <div className="text-center text-muted">
                  <p>Welcome to Help Desk Support</p>
                  <p>How can we assist you today?</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <Button variant="primary">
                  <FaPaperPlane />
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpDesk;

