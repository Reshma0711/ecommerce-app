import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Welcome to Shopy! We offer a variety of products to suit your
                needs. Browse our shop and find great deals!
              </Card.Text>
              <Card.Text>
                At Shopy, customer satisfaction is our priority. We offer fast
                shipping and great support!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
