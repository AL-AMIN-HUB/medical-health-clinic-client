import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery ">
      <div className="gallery_content text-center mx-auto mb-5">
        <h2 className="fw-bold">
          {" "}
          Total <span style={{ color: "#ff005a" }}>Health Care</span> Solutions
        </h2>
        <p>
          {" "}
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
      </div>
      <Row xs={2} md={4} className="gallery_row mx-auto">
        <Col className="p-1">
          <Card className="border-0 card_image">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/hmmNX31/image-7.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/zFGmwbj/image-8.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/cb5bfqs/image-6.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/87GQhCN/image-1.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/YR4pBSX/image-2.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/VLg7B3R/image-3.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/71f3SZb/image-4.jpg" />
          </Card>
        </Col>
        <Col className="p-1">
          <Card className="border-0">
            <Card.Img variant="top" className="img-fluid w-100 img" src="https://i.ibb.co/KwmfMh1/image-5.jpg" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
