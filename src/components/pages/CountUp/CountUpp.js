import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CountUpp.css";
import CountUp from "react-countup";
const CountUpp = () => {
  return (
    <div className="countUp">
      <Row xs={2} md={4} className="g-4 container mx-auto">
        <Col>
          <Card className="bg-transparent border-0  text-white">
            <Card.Img className="img-fluid w-25 mx-auto d-block" variant="top" src="https://i.ibb.co/PFk59rm/Screenshot-1.png" />
            <Card.Body className="text-center">
              <Card.Title className="big_title">
                <CountUp start={0} end={9632} duration={5} />
              </Card.Title>
              <Card.Text>Happy Patients</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-transparent border-0  text-white">
            <Card.Img className="img-fluid w-25 mx-auto d-block" variant="top" src="https://i.ibb.co/stYpwRk/Screenshot-2.png" />
            <Card.Body className="text-center">
              <Card.Title className="big_title">
                <CountUp start={0} end={178} duration={5} />
              </Card.Title>
              <Card.Text>Qualified Doctors</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-transparent border-0  text-white">
            <Card.Img className="img-fluid w-25 mx-auto d-block" variant="top" src="https://i.ibb.co/zGG2FB1/Screenshot-3.png" />
            <Card.Body className="text-center">
              <Card.Title className="big_title">
                <CountUp start={0} end={864} duration={5} />
              </Card.Title>
              <Card.Text>Clinic Rooms</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-transparent border-0  text-white">
            <Card.Img className="img-fluid w-25 mx-auto d-block" variant="top" src="https://i.ibb.co/xstjf4r/Screenshot-4.png" />
            <Card.Body className="text-center">
              <Card.Title className="big_title">
                <CountUp start={0} end={473} duration={5} />
              </Card.Title>
              <Card.Text>Local Partners</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CountUpp;
