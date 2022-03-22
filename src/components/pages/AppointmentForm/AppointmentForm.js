import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const { user } = useAuth();

  const initialInfo = { userName: user.displayName, email: user.email, phone: "", desc: "", department: "" };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  // handle on blur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
    };

    // send to the server
    fetch("https://medical-health-clinic.herokuapp.com/patientAppointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your appointment has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

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
              <form onSubmit={handleSubmit} action="#">
                <input
                  onBlur={handleOnBlur}
                  placeholder="Department"
                  className="form-control my-2 py-2 px-3"
                  type="text"
                  name="department"
                  required
                />

                <input
                  onBlur={handleOnBlur}
                  placeholder="Appointment Date"
                  className="form-control my-3 py-3 px-3"
                  required
                  type="date"
                  name="date"
                />
                <input
                  onBlur={handleOnBlur}
                  placeholder="Enter Your Name*"
                  required
                  className="form-control my-3 py-3 px-3"
                  type="text"
                  name="userName"
                  defaultValue={user.displayName}
                />
                <input
                  onBlur={handleOnBlur}
                  placeholder="Enter Your Email*"
                  required
                  className="form-control my-3 py-3 px-3"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                />
                <input
                  onBlur={handleOnBlur}
                  placeholder="Your Price Range in Dollar, must be valid number*"
                  className="form-control my-3 py-3 px-3"
                  type="number"
                  name="price"
                  required
                />
                <input
                  onBlur={handleOnBlur}
                  placeholder="Enter Your Phone Number*"
                  required
                  className="form-control my-3 py-3 px-3"
                  type="number"
                  name="phone"
                />
                <textarea
                  onBlur={handleOnBlur}
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
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <img className="img-fluid w-75" src="https://i.ibb.co/hXbgbmf/head-of-clinic.jpg" alt="" />
                  </div>
                  <div className="doctor_info">
                    <h5>Dr. Jonathan Barnes</h5>
                    <p className="text-muted">
                      <small>Chief Medical Officer, Founder</small>
                    </p>
                    <h6 className="color_custom fw-bold">1-800-1234-567</h6>
                  </div>
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

export default AppointmentForm;
