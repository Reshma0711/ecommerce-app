import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.images[0]} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response?.data?.products || []);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container className="my-5">
      <h2>Products</h2>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : products.length === 0 ? (
        <Alert variant="info">No products available</Alert>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
