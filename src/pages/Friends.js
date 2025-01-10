// pages/Friends.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaUserCircle, FaComment, FaShare, FaThumbsUp } from 'react-icons/fa';

function Friends() {
  const [comment, setComment] = useState('');
  
  // Sample user data
  const userData = {
    name: "John Doe",
    grade: "11",
    school: "PE High School",
    profileImage: "/student.png"
  };

  // Sample posts data
  const posts = [
    {
      id: 1,
      user: "Sarah Johnson",
      school: "Riverside High",
      content: "Just finished my science project on renewable energy! 🌞",
      image: "/project-image.jpg",
      likes: 45,
      comments: [
        { user: "Mike", text: "Amazing work!" },
        { user: "Lisa", text: "Can you share more details?" }
      ]
    },
    {
      id: 2,
      user: "David Smith",
      school: "Central High",
      content: "Check out our robotics team's latest creation!",
      video: "/robot-video.mp4",
      likes: 32,
      comments: [
        { user: "John", text: "This is incredible!" }
      ]
    }
  ];

  // Sample job opportunities
  const jobOpportunities = [
    {
      company: "Tech Corp",
      position: "Student Internship",
      field: "Software Development"
    },
    {
      company: "Bio Labs",
      position: "Research Assistant",
      field: "Biotechnology"
    }
  ];

  // Sample interested students
  const interestedStudents = [
    {
      name: "Emma Wilson",
      province: "Western Cape",
      school: "Cape Town High",
      interest: "Marine Biology"
    },
    {
      name: "Thabo Molefe",
      province: "Gauteng",
      school: "Pretoria High",
      interest: "Aerospace Engineering"
    },
    {
      name: "Lerato Ndlovu",
      province: "KwaZulu-Natal",
      school: "Durban Academy",
      interest: "Medicine"
    }
  ];

  const handleComment = (postId) => {
    // Handle comment submission
    console.log(`New comment on post ${postId}: ${comment}`);
    setComment('');
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
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
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

          {/* Job Opportunities */}
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Company Job Opportunities</h5>
            </Card.Header>
            <Card.Body>
              {jobOpportunities.map((job, index) => (
                <div key={index} className="mb-3">
                  <h6>{job.company}</h6>
                  <p className="mb-1">{job.position}</p>
                  <small className="text-muted">{job.field}</small>
                  <hr />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Middle Column - Posts */}
        <Col md={6}>
          {/* Create Post */}
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="What's on your mind?"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="outline-primary" size="sm">
                    Add Image
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    Add Video
                  </Button>
                  <Button variant="primary" size="sm">
                    Post
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Posts Feed */}
          {posts.map(post => (
            <Card key={post.id} className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaUserCircle size={40} className="me-2" />
                  <div>
                    <h6 className="mb-0">{post.user}</h6>
                    <small className="text-muted">{post.school}</small>
                  </div>
                </div>
                <p>{post.content}</p>
                {post.image && (
                  <img src={post.image} alt="Post" className="img-fluid mb-3" />
                )}
                {post.video && (
                  <video controls className="w-100 mb-3">
                    <source src={post.video} type="video/mp4" />
                  </video>
                )}
                
                {/* Interaction buttons */}
                <div className="d-flex justify-content-between mb-3">
                  <Button variant="link" className="text-decoration-none">
                    <FaThumbsUp /> {post.likes} Likes
                  </Button>
                  <Button variant="link" className="text-decoration-none">
                    <FaComment /> Comment
                  </Button>
                  <Button variant="link" className="text-decoration-none">
                    <FaShare /> Share
                  </Button>
                </div>

                {/* Comments section */}
                <div className="comments-section">
                  {post.comments.map((comment, index) => (
                    <div key={index} className="mb-2">
                      <small><strong>{comment.user}:</strong> {comment.text}</small>
                    </div>
                  ))}
                  <Form className="mt-3">
                    <Form.Group className="d-flex">
                      <Form.Control 
                        type="text" 
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        size="sm"
                      />
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="ms-2"
                        onClick={() => handleComment(post.id)}
                      >
                        Send
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Right Column */}
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Science Topics That Might Interest You</h5>
              <p>Explore fascinating scientific discoveries and research.</p>
              <Button 
                variant="link" 
                href="https://www.sciencedaily.com" 
                target="_blank"
                className="text-decoration-none p-0"
              >
                Learn More →
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5 className="mb-0">Connect</h5>
            </Card.Header>
            <Card.Body>
              <h6>Students Also Interested In:</h6>
              {interestedStudents.map((student, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaUserCircle size={30} className="me-2" />
                    <div>
                      <h6 className="mb-0">{student.name}</h6>
                      <small className="text-muted d-block">{student.interest}</small>
                      <small className="text-muted d-block">{student.province}</small>
                      <small className="text-muted d-block">{student.school}</small>
                    </div>
                  </div>
                  <Button variant="outline-primary" size="sm" className="mt-2">
                    Connect
                  </Button>
                  <hr />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Friends;