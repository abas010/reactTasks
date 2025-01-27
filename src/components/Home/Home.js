import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './Home.css'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col  className="flex-center">
          <Carousel data-bs-theme="Link" className="width900" >
            <Carousel.Item >
              <img
              
                className="d-block w-100"
                src="/img/LEGION.webp"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
              
                className="d-block w-100"
                src="/img/MACBOOK.webp"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
              
                className="d-block w-100"
                src="/img/TUF.webp"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
