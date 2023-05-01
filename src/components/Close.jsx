import React from 'react'
import greenhome from "../images/svg/greenhome.svg"
import { Col, Container, Row } from 'react-bootstrap'
import greenpanta from "../images/svg/greenpantagon.svg"
import lightpantagon from "../images/svg/lightpantagon.svg";
import smallblur from "../images/png/smallblur.png";
import playbtn from "../images/svg/playbtn.svg";


const Close = () => {
  return (
    <section className="py-lg-5 mt-5 overflow-hidden">
      <Container className="py-5">
        <Row className='justify-content-between py-4'>
          <Col lg={3} md={6}>
            <div>
              <img className="w-100" src={greenhome} alt="greenhome" />
            </div>
          </Col>
          <Col lg={3} md={6} className='pe-xl-5 mt-md-0 mt-4'>
            <div className='pe-xl-5 text-md-start text-center'>
              <p className="ff_segoe fw_400 fs_md clr_black pe -5">
                Leverage big data and artificial intelligence to identify your
                next Client
              </p>
              <p className="ff_segoe fw_400 fs_md clr_lytblack pe -5">
                Compliment your current business development with Unconstrained
                predictive analytics.
              </p>

              <div className="back_white pt-3 ps_26 pb_19 position-relative triangle_befor mt_66">
                <div className="d-flex align-items-center">
                  <img src={greenpanta} alt="greenpanta" />
                  <p className="mb-0 ff_segoe fw_400 fs_md clr_lytblack  ps_20">
                    Unconstrained
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={lightpantagon} alt="greenpanta" />
                  <p className="mb-0 ff_segoe fw_400 fs_md clr_lytblack ps_20">
                    Constrained
                  </p>
                </div>
                <div className="small_blur position-absolute top-0 z_m1">
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={7} className='pe-xl-5 mx-lg-0 mx-auto mt-lg-0 mt-5 '>
            <div className='pe-xl-5 text-lg-start text-center'>
              <h1 className='ff_segoe fw_600 fs_5xl clr_black pe -5'>Close More Deals</h1>
              <div className="hover_border white_border ps-2 pe-2 py_15 rd c_5 ms_20 ml_xxs_0 mt_xxs_15 mt_120">
                <a className="ff_segoe fw_600 fs_md clr_green " href="#">
                  Book a demo
                </a>
                <img className="ms-2" src={playbtn} alt="playbtn" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Close