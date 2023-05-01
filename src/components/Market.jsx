import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import world from "../images/png/world.png"
import globe from "../images/png/globe.png";

const Market = () => {
  return (
    <section className="pt-5">
      <Container className="pt-5">
        <Row className="justify-content-between pt-lg-5 flex-lg-row flex-column-reverse align-items-center">
          <Col lg={6} xl={5} className="mt-lg-0 mt-5">
            <div className="text-lg-start text-center">
              <h1 className="ff_segoe fw_600 fs_5xl clr_black">
                Your Target Market
              </h1>
              <p className="ff_segoe fw_400 fs_md clr_black befor_earth ps-4 mt-3">
                Nationwide coverage
              </p>
              <p className="ff_segoe fw_400 fs_md clr_lytblack">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button className="ff_segoe fw_400 fs_md clr_white bg_green green_border py_15 px-5 mt_31">
                Get started
              </button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="position-relative">
              <img className="w-100" src={world} alt="world" />
              <div className="position-absolute top_0  l_40 glob_animate">
                <img className='w_xsm_80' src={globe} alt="globe" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Market