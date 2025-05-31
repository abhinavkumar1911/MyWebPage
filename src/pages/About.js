import React from 'react';
import './AboutPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
         <Col>
            <div className="about-container">
      <h1>About the Student Portal</h1>
      <p>
        Welcome to the Student Portal – your one-stop solution for managing your academic journey.
        This platform is designed to help students access important resources, track their progress,
        communicate with faculty, and stay updated with campus news.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>View and edit student profiles</li>
        <li>Check grades and academic performance</li>
        <li>Register for courses and manage schedule</li>
        <li>Receive notifications and announcements</li>
        <li>Connect with faculty and classmates</li>
      </ul>

      <p>
        Whether you're looking to plan your semester, check exam results, or connect with your peers,
        the Student Portal provides an intuitive and secure environment tailored for your needs.
      </p>
    </div>
         </Col>
      </Row>

      <Row>
        <Col>
          <Carousel md interval={1500}>
            <Carousel.Item>
              <img src='.\Images\istockphoto.jpg' alt="Slide 4" className="d-block w-100" />
              <Carousel.Caption>
                <h1>SCDL Collage</h1>
                <p>A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='.\Images\istockphoto-1.jpg' alt="Slide 1" className="d-block w-100" />
              <Carousel.Caption>
                <h1>Pune Collage</h1>
                <p>A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='.\Images\istockphoto-2.jpg' alt="Slide 2" className="d-block w-100" />
              <Carousel.Caption>
                <h1>Delhi Collage</h1>
                <p>A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src='.\Images\istockphoto-3.jpg' alt="Slide 3" className="d-block w-100" />
              <Carousel.Caption>
                <h1>Chennai Collage</h1>
                <p>A collage may sometimes include magazine and newspaper clippings, ribbons, paint, bits of colored or handmade papers</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    
  );
};

export default About;
