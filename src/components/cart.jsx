import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          {cartItems.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.images[0]} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Cart;
