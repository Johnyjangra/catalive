import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import diamond from "../images/svg/diamond.svg"
import track from "../images/svg/track.svg";
import doller from "../images/svg/doller.svg";
import percent from "../images/svg/percent.svg";
import greenpic from "../images/svg/greenpic.svg";

const OurPlatform = () => {
  return (
    <section className="pt-lg-5 mt-lg-5">
      <Container className="pt-5 mt-5">
        <Row>
          <Col xl={3} sm={12}>
            <div className='text-xl-start text-center'> 
              <h1 className="ff_segoe fw_600 fs_5xl clr_black mx_190 mx-xl-0 mx-auto">
                Our Platform
              </h1>
            </div>
          </Col>
          <Col xl={9} sm={12} className='mt-lg-0 mt-4'>
            <Row className="h-100">
              <Col lg={6}>
                <div className="gray_bg pt-5 ps_52 pe-5 h-100">
                  <div className="d-flex justify-content-between align-items-center pb-5">
                    <h1 className="ff_segoe fw_600 fs_xl clr_black mb-0">
                      Exclusive
                    </h1>
                    <div>
                      <img src={diamond} alt="diamond" />
                    </div>
                  </div>
                  <div className="pt-5"></div>
                  <p className="ff_segoe fw_400 fs_md clr_lytblack max_186 py-4">
                    200 exclusive prospects pushed to your platfrom monthly.
                  </p>
                </div>
              </Col>
              <Col lg={6} className='mt-lg-0 my-4'>
                <div className="gray_bg pt-5 ps_52 pe-5 h-100 h-100">
                  <div className="d-flex justify-content-between align-items-center pb-5">
                    <h1 className="ff_segoe fw_600 fs_xl clr_black mb-0 mx_92">
                      In your backyard
                    </h1>
                    <div>
                      <img src={track} alt="diamond" />
                    </div>
                  </div>
                  <div className="pt-5"></div>
                  <p className="ff_segoe fw_400 fs_md clr_lytblack max_186 py-4 mx_316">
                    Radius based leads within 50-miles from you, prioritizing
                    those closer to you.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xl={9} sm={12} className="mt-4 my
          ">
            <Row className="h-100">
              <Col lg={6}>
                <div className="gray_bg pt-5 ps_52 pe-5 h-100">
                  <div className="d-flex justify-content-between align-items-center pb-5">
                    <h1 className="ff_segoe fw_600 fs_xl clr_black mb-0">
                      High net worth
                    </h1>
                    <div>
                      <img src={doller} alt="diamond" />
                    </div>
                  </div>
                  <div className="pt-5"></div>
                  <p className="ff_segoe fw_400 fs_md clr_lytblack max_186 pt-5 mx_276">
                    Average investable assets of $1.5 million.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="gray_bg pt-5 ps_52 pe-5 h-100 mt-lg-0">
                  <div className="d-flex justify-content-between align-items-center pb-5">
                    <h1 className="ff_segoe fw_600 fs_xl clr_black mb-0">
                      High propensity
                    </h1>
                    <div>
                      <img src={percent} alt="diamond" />
                    </div>
                  </div>
                  <div className="pt-5"></div>
                  <p className="ff_segoe fw_400 fs_md clr_lytblack max_186 py-4 mx_273">
                    Our combination of event-driven data, historical data,
                    behavioral analytics, and real-time data results in the
                    highest propensity prospects.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={3} sm={6} className="mt-4 mx-xl-0 mx-auto">
            <div className="h-100">
              <img className="w-100 " src={greenpic} alt="greenpic" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurPlatform