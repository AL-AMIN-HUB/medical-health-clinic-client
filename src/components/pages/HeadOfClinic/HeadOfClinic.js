import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./HeadOfClinic.css";

const HeadOfClinic = () => {
  return (
    <div className="Head_clinic">
      <Row xs={1} md={2} className="container mx-auto g-4">
        <Col className="p-2 shadow">
          <Card className="border-0">
            <Card.Img className="img-fluid" variant="top" src="https://i.ibb.co/YbkvhDz/pediatrics-700x800.jpg" />
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center shadow-sm">
          <Card className="border-0 ">
            <Card.Body>
              <Card.Text className="sub_title">WELCOME TO MEDSERVICE</Card.Text>
              <Card.Title>Complete Medical Solutions in One Place</Card.Title>
              <Card.Text>
                <p className="lead text-muted">
                  An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus
                  pretium ligula rutrum luctus ultrice aliquam a augue suscipit
                </p>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue
                  leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum
                  porta justo integer at velna vitae auctor integer congue
                </p>
                <div>
                  <p>Randon Pexon, Head of Clinic</p>
                  <img className="img-fluid" src="https://i.ibb.co/VqgFtMw/signature.png" alt="" />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HeadOfClinic;
