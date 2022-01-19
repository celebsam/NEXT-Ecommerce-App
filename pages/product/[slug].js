import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Image from "next/image";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.find((p) => p.slug === slug);
  console.log(product);
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Col>
        <Col md={3} xs={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Category: {product.category}</ListGroup.Item>
            <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
            <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>Price</Col>
                <Col>{product.price}</Col>
              </Row>
              <Row>
                <Col>Status</Col>
                <Col>{product.countInStock}</Col>
              </Row>
              <br />
              <Button style={{ display: "block", width: "100%" }}>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
