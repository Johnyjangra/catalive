import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion";
import one from "../images/svg/one.svg";
import two from "../images/svg/two.svg";
import three from "../images/svg/three.svg";
import four from "../images/svg/four.svg";
import allcard from "../images/svg/allcard.png";
import details from "../images/png/details.png";
import result from "../images/png/result.png";
import checkout from "../images/png/checkout.png";

const GetStart = () => {
  const [first, setfirst] = useState(0)
    return (
      <section className="px-3 ">
        <div className="bg_blue rdc_15 py-5">
          <Container className="py-4">
            <h1 className="ff_segoe fw_600 fs_5xl clr_white text-center pb-5">
              How to get started?
            </h1>
            <Row className="align-items-center">
              <Col lg={6}>
                <div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      onClick={() => {
                        setfirst(0);
                      }}
                    >
                      <Accordion.Header>
                        <span className="bg_lyt_blue py_10_17">
                          <img src={one} alt="one" />
                        </span>
                        <h1 className="ff_segoe fw_600 fs_2xl clr_white mb-0 ps-sm-5 ps-2">
                          Provide your information
                        </h1>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_segoe fw_400 fs_md clr_lightwhite px-sm-5 ms-2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className="mt-4"
                      onClick={() => {
                        setfirst(1);
                      }}
                    >
                      <Accordion.Header>
                        <span className="bg_lyt_blue py_10_17">
                          <img src={two} alt="one" />
                        </span>
                        <h1 className="ff_segoe fw_600 fs_2xl clr_white mb-0 ps-sm-5 ps-2">
                          Select your location
                        </h1>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_segoe fw_400 fs_md clr_lightwhite px-sm-5 ms-2">
                          {" "}
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="mt-4"
                      onClick={() => {
                        setfirst(2);
                      }}
                    >
                      <Accordion.Header>
                        <span className="bg_lyt_blue py_10_17">
                          <img src={three} alt="one" />
                        </span>
                        <h3 className="ff_segoe fw_600 fs_2xl clr_white mb-0 ps-sm-5 ps-2">
                          Purchase your subscription
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_segoe fw_400 fs_md clr_lightwhite px-sm-5 ms-2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="3"
                      className="mt-4"
                      onClick={() => {
                        setfirst(3);
                      }}
                    >
                      <Accordion.Header>
                        <span className="bg_lyt_blue py_10_17">
                          <img src={four} alt="one" />
                        </span>
                        <h3 className="ff_segoe fw_600 fs_2xl clr_white mb-0 ps-sm-5 ps-2">
                          Purchase your subscription
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_segoe fw_400 fs_md clr_lightwhite px-sm-5 ms-2">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col lg={6} className="mt-lg-0 mt-5">
                <div className="text-center">
                  <div className="text-center">
                    <img
                      className={
                        first === 0
                          ? "d-block mx-auto w-80 w_95"
                          : "d-none mx-auto w-80 w_95"
                      }
                      src={allcard}
                      alt="allcard"
                    />
                    <img
                      className={
                        first === 1
                          ? "d-block mx-auto w-80 w_95"
                          : "d-none mx-auto w-80 w_95"
                      }
                      src={details}
                      alt="allcard"
                    />
                    <img
                      className={
                        first === 2
                          ? "d-block mx-auto w-80 w_95"
                          : "d-none mx-auto w-80 w_95"
                      }
                      src={result}
                      alt="allcard"
                    />
                    <img
                      className={
                        first === 3
                          ? "d-block mx-auto w-80 w_95"
                          : "d-none mx-auto w-80 w_95"
                      }
                      src={checkout}
                      alt="allcard"
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center pt_34 flex-sm-row flex-column">
                    <div>
                      <button className="ff_segoe fw_400 fs_md clr_white bg_green green_border py_15 px-5">
                        Sign up
                      </button>
                    </div>
                    <p className="ff_segoe fw_400 fs_md clr_lightwhite ps-sm-5 pt-sm-0 pt-4">
                      Register in under 5 minutes.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
}

export default GetStart