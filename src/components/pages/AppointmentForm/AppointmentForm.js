import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AppointmentForm = () => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4 container mx-auto py-5">
        <Col className="col-sm-8">
          <Card className="h-100 border-0 shadow">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-4">
          <Card className="h-100 shadow border-0">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel
                laboriosam nemo libero rem quidem at non commodi ducimus voluptates ab fuga ipsam similique reprehenderit, adipisci saepe esse!
                Facere, rerum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentForm;
