import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./UpperBanner.css";

const UpperBanner = () => {
  return (
    <div>
      <CardGroup className="container mx-auto upper_content_banner">
        <Card className="card_content">
          <Card.Body>
            <Card.Text className="sub_title">Qualified Doctors</Card.Text>
            <Card.Title>WHERE PEOPLE COME FIRST</Card.Title>
            <Card.Text>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum vitae a purus primis ipsum magna ipsum</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_content">
          <Card.Body>
            <Card.Text className="sub_title">24 Hour Service</Card.Text>
            <Card.Title>HIGHEST QUALITY CARE</Card.Title>
            <Card.Text>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum vitae a purus primis ipsum magna ipsum</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_content">
          <Card.Body>
            <Card.Text className="sub_title">EMERGENCY DEPARTMENT</Card.Text>
            <Card.Title>Here For You</Card.Title>
            <Card.Text>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum vitae a purus primis ipsum magna ipsum</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default UpperBanner;
