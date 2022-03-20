import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { Card } from "react-bootstrap";
import "./Review.css";

const Review = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="review">
      <div className="gallery_content text-center mx-auto mb-5">
        <h2 className="fw-bold">
          {" "}
          What Our <span style={{ color: "#ff005a" }}>Patients </span>
          Say{" "}
        </h2>
        <p className="text-muted">
          {" "}
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
      </div>
      <div className="container mx-auto">
        <Slider {...settings}>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/vc8kvLy/review-author-4.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/vc8kvLy/review-author-4.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/txtq4Gg/review-author-9.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/mCMsHMn/review-author-1.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/MGZWm6k/review-author-2.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/G7W4sMX/review-author-3.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/Fw0D5sg/review-author-8.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/V3gzsFB/review-author-7.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Developer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/yRPXpfD/review-author-6.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Malan</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Website Builder</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="border-0 shadow my-2 py-3 text-center h-100 mx-2 review_card">
              <Card.Img className="img-fluid review_img" variant="top" src="https://i.ibb.co/nsv6G4x/review-author-5.jpg" />
              <Card.Body>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Title className="text-start">Devid Miller</Card.Title>
                <Card.Text className="d-flex justify-content-between align-items-center">
                  <i>
                    <small>Web Designer</small>
                  </i>
                  <span>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                    <i className="fas fa-star text-warning m-0 p-0"></i>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Review;
