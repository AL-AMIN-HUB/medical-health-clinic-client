import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreService from "./ExploreService";

const ExploreServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exploreServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="gallery_content text-center mx-auto my-5 pt-5">
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
          <ExploreService key={index} service={service}></ExploreService>
        ))}
      </Row>
    </div>
  );
};

export default ExploreServices;
