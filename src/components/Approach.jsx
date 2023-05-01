import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import one from "../images/svg/one.svg"
import two from "../images/svg/two.svg";
import three from "../images/svg/three.svg";
import four from "../images/svg/four.svg";
import machinepic from "../images/svg/machinepic.svg";

const Approach = () => {
  return (
    <section className="px-3">
      <Row>
        <Col lg={8}>
          <div className="bg_blue pt_83 rdc_15 pb_87">
            <Container>
              <div className="mx_682 m-auto">
                <Row>
                  <Col md={3}>
                    <div className="bg_blur py_17 ps-3">
                      <div className="">
                        <span className="bg_green py_6 px_9">
                          <img src={one} alt="one" />
                        </span>
                      </div>
                      <p className="ff_segoe fw_600 fs_sm clr_white mx_34 mb-0 pt-3">
                        Big Data
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg _blur py_17 ps-3">
                      <div className="">
                        <span className="bg_lyt_blue py_6 px_9">
                          <img src={two} alt="one" />
                        </span>
                      </div>
                      <p className="ff_segoe fw_600 fs_sm clr_white mx_34 mb-0 pt-3">
                        Event-Driven
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg _blur py_17 ps-3">
                      <div className="">
                        <span className="bg_lyt_blue py_6 px_9">
                          <img src={three} alt="one" />
                        </span>
                      </div>
                      <p className="ff_segoe fw_600 fs_sm clr_white mx_34 mb-0 pt-3">
                        Artificial Intelligence
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg_ blur py_17 ps-3">
                      <div className="">
                        <span className="bg_lyt_blue py_6 px_9">
                          <img src={four} alt="one" />
                        </span>
                      </div>
                      <p className="ff_segoe fw_600 fs_sm clr_white mx_34 mb-0 pt-3">
                        Predictive Analytics
                      </p>
                    </div>
                  </Col>
                  <Col className="pt-4">
                    <Row className="bg_blur align-items-center mt-5">
                      <Col lg={6}>
                        <div>
                          <img src={machinepic} alt="machinepic" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="ps-4">
                          <h2 className="ff_segoe fw_600 fs_xl clr_white">
                            Big Data
                          </h2>
                          <p className="ff_segoe fw_600 fs_xsm clr_lightwhite pe-5">
                            We gather hundreds of millions of data points in
                            order to perform advanced analytics to identify the
                            highest propensity prospects
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Col>

        <Col lg={4} md={9} className='mx-lg-0 mx-0'>
          <div className="bg_blue rdc_15 pt_80 h-100">
            <h2 className="ff_segoe fw_400 gs_45 clr_white  mx_175">
              Our approach
            </h2>
            <div className='pt-5 mt-5'>
              <div className='pt-5 mt-5'></div>
              <div className='pt-4'></div>
              <h1 className='ff_segoe fw_400 fs_4xl clr_white'>200k<span className='fs_30'>Properties</span></h1>
              <p className='ff_segoe fw_400 fs_md clr_lightwhite mx_223'>of wealth will be transitioned in the next 25 years.</p>
              <button className="ff_segoe fw_400 fs_md clr_white bg_green green_border py_15 px-5">
                Get started
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Approach