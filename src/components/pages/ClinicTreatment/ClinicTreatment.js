import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ClinicTreatment = () => {
  return (
    <div className="Head_clinic">
      <Row xs={1} md={2} className="container mx-auto g-4">
        <Col className="d-flex justify-content-center align-items-center shadow">
          <Card className="border-0 ">
            <Card.Body>
              <Card.Text className="sub_title">Clinic Treatment</Card.Text>
              <Card.Title>Clinic with Innovative Approach to Treatment</Card.Title>
              <Card.Text>
                <p className="text-muted">
                  An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at
                  pretium purus pretium ligula rutrum itae laoreet augue posuere and curae integer congue leo metus mollis primis and mauris
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <p>Nemo ipsam egestas volute and turpis dolores quaerat Magna luctus tempor An enim nullam tempor at pretium purus blandit</p>
                  <p>Magna luctus tempor blandit a vitae suscipit mollis Nemo ipsam egestas volute turpis dolores quaerat An enim nullam tempor</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-2">
          <Card className="border-0">
            <Card.Img className="img-fluid" variant="top" src="https://i.ibb.co/23RZ2qf/image-04.png" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ClinicTreatment;
