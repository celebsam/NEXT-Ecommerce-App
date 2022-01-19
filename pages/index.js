import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import data from "../utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <Row xs={1} sm={2} md={3} lg={4}>
        {data.map((product, index) => (
          <Col key={index}>
            <Card>
              <Link href={`/product/${product.slug}`} passHref>
                <Card.Img
                  variant="top"
                  src={product.image}
                  title={product.name}
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Card.Body style={{ textAlign: "center" }}>
                <Link href={`/product/${product.slug}`} passHref>
                  <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>&#8358;{product.price}</Card.Text>
                  </div>
                </Link>
                <br />
                <Button variant="outline-primary">Add to cart</Button>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </div>
  );
}
