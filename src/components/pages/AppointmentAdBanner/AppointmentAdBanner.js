import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AppointmentAdBanner = () => {
  return (
    <div>
      <Row xs={1} md={2} className="container mx-auto g-4 mt-lg-5">
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="border-0 ">
            <Card.Body>
              <Card.Text className=" mb-5" style={{ color: "#049CBF" }}>
                WHY CHOOSE MEDSERVICE
              </Card.Text>
              <Card.Title className="big_title text-muted">
                High <span style={{ color: "#ff005a" }}>Quality Medical</span> Care
              </Card.Title>
              <Card.Text>
                <p className=" my-2">
                  Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue egestas suscipit lectus mauris a lectus laoreet
                  gestas neque undo luctus feugiat augue suscipit
                </p>
                <button className="button mt-3 fw-bold">
                  {" "}
                  <small>MAKE AN APPOINTMENT</small>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="">
          <Card className="border-0">
            <img className="img-fluid" src="https://i.ibb.co/4Kkt1qx/image-06.png" alt="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentAdBanner;
