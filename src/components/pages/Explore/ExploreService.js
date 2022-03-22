import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreService.css";

const ExploreService = (props) => {
  const { name, imgMain, desc, _id } = props.service;

  //
  return (
    <Col>
      <Card className="border-0 shadow h-100 explore_card">
        <Card.Img className="img-fluid explore_img" style={{ width: "100%", height: "250px" }} variant="top" src={imgMain} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc.slice(0, 100)}...</Card.Text>
        </Card.Body>
        <Link to={`/serviceDetails/${_id}`}>
          <button className="button2 border-0 py-2 px-3 w-100">View More Details</button>
        </Link>
      </Card>
    </Col>
  );
};

export default ExploreService;
