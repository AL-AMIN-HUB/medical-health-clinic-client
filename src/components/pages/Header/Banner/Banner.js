import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src="https://i.ibb.co/c2vQbTd/slide-11.jpg" alt="First slide" />
          <Carousel.Caption className="carousel_content text-lg-start">
            <h2 className="text-dark">
              With a Touch of <span style={{ color: "#ff005a" }}>Kindness</span>
            </h2>
            <p className="text-dark">
              Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis and placerat purus feugiat primis ultrice in ligula
              impedit magna purus at pretium
            </p>
            <button className="button"> More About Clinic</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src="https://i.ibb.co/7W1Wgdp/slide-12.jpg" alt="Second slide" />

          <Carousel.Caption className="carousel_content text-lg-start">
            <h2 className="text-dark">
              <span style={{ color: "#ff005a" }}>Child Care</span> Treatments
            </h2>
            <p className="text-dark">Quaerat sodales sapien undo euismod risus auctor egestas augue mauri viverra tortor sapien</p>
            <button className="button"> More About Clinic</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src="https://i.ibb.co/cLBCnjb/slide-13.jpg" alt="Third slide" />

          <Carousel.Caption className="carousel_content text-lg-start">
            <h2 className="text-dark">
              Newborn<span style={{ color: "#ff005a" }}> Care Services</span>
            </h2>
            <p className="text-dark">
              Luctus mauris orci auctor purus euismod pretium purus dolor impedit magna purus at pretium donec <br />
              Feugiat primis ultrice in ligula risus auctor tempus impedit
            </p>
            <button className="button"> More About Clinic</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
