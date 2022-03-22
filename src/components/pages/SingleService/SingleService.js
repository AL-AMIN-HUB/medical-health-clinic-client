import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleService.css";

const SingleService = (props) => {
  const { name, imgMain, desc } = props.service;
  return (
    <Col>
      <Card className="border-0 shadow h-100 service_card">
        <Card.Img className="img-fluid" style={{ width: "100%", height: "250px" }} variant="top" src={imgMain} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc.slice(0, 100)}...</Card.Text>
        </Card.Body>
        <button onClick={() => console.log("Clicked")} className="button2 border-0 py-2 px-3 service_button">
          View More Details
        </button>
      </Card>
    </Col>
  );
};

export default SingleService;
