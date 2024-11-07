import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button variant="warning" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
