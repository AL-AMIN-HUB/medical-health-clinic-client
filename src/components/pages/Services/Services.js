import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  const { isLoading, setIsLoading } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://medical-health-clinic.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);

  if (isLoading) {
    return (
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
  return (
    <div>
      <div className="gallery_content text-center mx-auto mb-5">
        <h2 className="fw-bold">
          {" "}
          Our Health Care <span style={{ color: "#ff005a" }}>Services</span>
        </h2>
        <p>
          {" "}
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
      </div>
      <Row xs={1} md={3} sm={2} className="g-4 container mx-auto py-5">
        {services.map((service, index) => (
          <SingleService key={index} service={service}></SingleService>
        ))}
      </Row>
    </div>
  );
};

export default Services;
