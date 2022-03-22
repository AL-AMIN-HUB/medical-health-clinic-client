import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ServiceDetails = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/allServices/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [serviceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <Row xs={1} md={2} className="g-4 container mx-auto py-5">
        <Col className="col-sm-8">
          <Card className="h-100 border-0 ">
            <Card.Body>
              <Card.Title>
                <h3 className="appointment_content">Book an appointment</h3>
              </Card.Title>
              <Card.Text>
                <p className="text-muted my-3 pb-3">
                  Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue
                  leo metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales
                  sapien undo pretium purus feugiat dolor impedit magna purus pretium gravida donec ligula massa gravida donec pretium
                </p>
              </Card.Text>

              <Card.Text className="text-muted mt-5">
                <small>
                  * Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue
                  leo metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales
                  sapien undo pretium purus
                </small>
              </Card.Text>
              <form onSubmit={handleSubmit} action="#">
                <input placeholder="Department" className="form-control my-2 py-2 px-3" type="text" name="department" defaultValue={service.name} />

                <input placeholder="Appointment Date" className="form-control my-3 py-3 px-3" type="date" name="date" />
                <input
                  placeholder="Enter Your Name*"
                  required
                  className="form-control my-3 py-3 px-3"
                  type="text"
                  name="userName"
                  defaultValue={user.displayName}
                />
                <input
                  placeholder="Enter Your Email*"
                  required
                  className="form-control my-3 py-3 px-3"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                />
                <input placeholder="Enter Your Phone Number*" required className="form-control my-3 py-3 px-3" type="number" name="phone" />
                <textarea
                  rows="5"
                  placeholder="Tell us your problem here..."
                  required
                  className="form-control my-3 py-3 px-3"
                  type="text"
                  name="desc"
                />
                <input className=" w-100 border-0 my-2 py-2 px-3 button2" type="submit" value="REQUEST AN APPOINTMENT" />
              </form>
              <Card.Text className="text-muted mt-5">
                <small>
                  * Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue
                  leo metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales
                  sapien undo pretium purus
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-4">
          <Card className="h-100  border-0">
            <Card.Body>
              <Card.Title>The Heart Of Clinic</Card.Title>
              <hr />
              <Card.Text>
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/4Kkt1qx/image-06.png" alt="" />
                </div>

                <div className="mt-2">
                  <p className="pb-3">
                    <small>
                      An enim nullam tempor sapien at gravida donec pretium ipsum porta justo integer at odiovelna vitae auctor integer congue magna
                      purus
                    </small>
                  </p>
                  <button className=" border-0 py-2 px-3 button2">About More</button>
                </div>
                <div className="working_time mt-5">
                  <h5>Working Hour</h5>
                  <p className="">
                    Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
                  </p>
                  <div className="d-flex justify-content-between time_table">
                    <div>
                      <p>Mon – Wed</p>
                    </div>

                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="d-flex justify-content-between time_table">
                    <div>
                      <p>Thursday</p>
                    </div>

                    <div>9:00 AM - 6:30 PM</div>
                  </div>
                  <div className="d-flex justify-content-between time_table">
                    <div>
                      <p>Friday</p>
                    </div>

                    <div>9:00 AM - 6:00 PM</div>
                  </div>
                  <div className="d-flex justify-content-between time_table_last">
                    <div>
                      <p>Sun - Sun</p>
                    </div>

                    <div>CLOSED</div>
                  </div>
                  <h4>Need a personal health plan?</h4>
                  <p>
                    <small>Porta semper lacus cursus, and feugiat primis ultrice ligula at risus auctor</small>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetails;
