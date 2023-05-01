import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import playbtn from "../images/svg/playbtn.svg"
import Nav from './Nav';
import heroimg from "../images/svg/heroimg.svg"
import greenblur from "../images/png/greenblur.png";
import overview from "../images/svg/overview.svg";
import mikepic from "../images/svg/mikepic.svg";
import boxes1 from "../images/svg/boxes1.svg";
import building from "../images/svg/building.svg";
import root from "../images/svg/root.svg";
import lightblur from "../images/png/lightblur.png";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-5 position-relative">
      <Nav />
      <Container className="py-lg-5">
        <Row className="pt-4 position-relative pb-5 flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="text-lg-start text-center pt-lg-0 pt-4">
              <h1 className="ff_segoe fw_600 fs_7xl clr_black mx_417">
                Event-Driven Listing Leads
              </h1>
              <p className="mx_430 pt-3 pb-4">
                Not your average smart farming, not statistical analysis, but
                actionable behaviors.
              </p>
              <div className="d-flex align-items-center pt-lg-5 pt-4 justify-content-lg-start justify-content-center fc_clm">
                <button className="ff_segoe fw_400 fs_md clr_white bg_green green_border py_15 px-5">
                  Get started
                </button>
                <div className="hover_border white_border ps-4 pe-4 py_15 rd c_5 ms_20 ml_xxs_0 mt_xxs_15">
                  <a className="ff_segoe fw_600 fs_md clr_green " href="#">
                    Book a demo
                  </a>
                  <img className="ms-3" src={playbtn} alt="playbtn" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <div className="position-absolute top_14 move_card_animat ">
                <img src={overview} alt="overview" />
              </div>
              <img className="w-100" src={heroimg} alt="heroimg" />
              <div className="position-absolute animat_card move_card_animat">
                <img src={mikepic} alt="mikepic" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="green_blur position-absolute green_blurset"></div>
      </Container>
      <div>
        <Container className="blue_line"></Container>
      </div>
      {/* ===== */}
      <div className="position-relative">
        <div className="blue_blur position-absolute"></div>
        <Container className="pt-lg-5">
          <div className="py-5">
            <h2 className="mx_742 text-center m-auto">
              Identify Inherited Properties in your local area that will sell
            </h2>
          </div>
          <div className="position-absolute ryt_0 top_0 z_m1">
            <img src={lightblur} alt="lightblur" />
          </div>
          <Row className="justify-content-between pt-4">
            <Col md={3} sm={6}>
              <div className="text-center">
                <p className="ff_segoe fw_400 fs_xl clr_black mx_140 m-auto ">
                  Industry High Prediction Rate
                </p>
                <h2 className="ff_segoe fw_600 fs_3xl clr_black pt-3">40%</h2>
                <div className="mt_55">
                  <img src={boxes1} alt="boxes1" />
                </div>
                <p className="ff_segoe fw_400 fs_md clr_black mx_248 m-auto pt-5 mt-3">
                  Roughly 4 out of 10 property leads sell within 12 months.
                </p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="text-center pt-4">
                <h2 className="ff_segoe fw_600 fs_3xl clr_black pt-5">$77Bn</h2>
                <div className="mt_55">
                  <img src={building} alt="boxes1" />
                </div>
                <p className="ff_segoe fw_400 fs_md clr_black mx_248 m-auto pt-5 mt-2">
                  Predicted total property value that will sell per year.
                </p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mx-md-0 mx-auto">
              <div className="text-center pt-4">
                <h2 className="ff_segoe fw_600 fs_3xl clr_black pt-5">77%</h2>
                <div className="mt_55">
                  <img src={root} alt="boxes1" />
                </div>
                <p className="ff_segoe fw_400 fs_md clr_black mx_266 m-auto pt-5 ">
                  Of recent seller contacted only one agent before finding the
                  right agent they worked with to sell their home.
                </p>
              </div>
            </Col>
          </Row>
          <div className="downline mt-5"></div>
        </Container>
      </div>
    </section>
  );
}

export default Hero