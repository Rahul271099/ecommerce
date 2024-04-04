// import React from "react";
import { Card, Button } from "react-bootstrap";
import "./product.css";

const ProductComponent = ({ details }) => {
  return (
    <div className="main_product_section">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={details.image} className="prod_img" />
        <Card.Body className="card_body">
          <Card.Text>Price ${details.price}</Card.Text>
          <Card.Title className="card_title">{details.title}</Card.Title>
          <Button variant="warning">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductComponent;
