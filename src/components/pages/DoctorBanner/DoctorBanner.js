import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./DoctorBanner.css";

const DoctorBanner = () => {
  return (
    <div className="doctorBanner">
      <Row xs={1} md={2} className="container mx-auto g-4">
        <Col className="p-2 ">
          <Card className="border-0 bg-transparent">
            <img className="img-fluid img2" src="https://i.ibb.co/5r77P9J/image-05.png" alt="" />
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="border-0 text-white bg-transparent">
            <Card.Body>
              <Card.Text className=" mb-5">MODERN MEDICINE</Card.Text>
              <Card.Title className="title_doctor">Better Technologies for Better Healthcare</Card.Title>
              <Card.Text>
                <p className=" my-2">
                  Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue egestas suscipit lectus mauris lectus laoreet
                  gestas neque undo luctus feugiat. Aliquam a augue suscipit
                </p>
                <button className="button mt-3">
                  {" "}
                  <small>VIEW OUR DOCTORS</small>
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DoctorBanner;
