import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import eye from "../images/svg/eye.svg"
import circle from "../images/svg/circle.svg";
import file from "../images/svg/file.svg";

const EyeSection = () => {
  return (
    <section className='pt-lg-5 mt-5'>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="text-center">
              <div>
                <img src={eye} alt="eye" />
              </div>
              <p  className='pt-4'>
                Harness the power of 30 million data points to reach your
                highest converting target market
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className='mt-md-0 mt-4'>
            <div className="text-center">
              <div>
                <img src={circle} alt="eye" />
              </div>
              <p className='pt-4'>Increase your marketingdollars ROI</p>
            </div>
          </Col>
          <Col lg={4} md={6} className='mx-lg-0 mx-auto mt-lg-0 mt-4'>
            <div className="text-center">
              <div>
                <img src={file} alt="eye" />
              </div>
              <p className='pt-4'>
                A top of funnel marketing solution to fill your prospect
                pipeline
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EyeSection