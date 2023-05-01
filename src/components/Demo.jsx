import React from 'react'
import grayblur from "../images/png/grayblur.png";
import bigtext from "../images/png/bigtext.png";
import graygroup from "../images/svg/graygroup.png";
import { Col, Container } from 'react-bootstrap';
import whiteplaybtn from "../images/svg/whiteplaybtn.svg";
import videoblur from "../images/png/videoblur.png";
import videoblueblur from "../images/png/videoblueblur.png";
import demoblue from "../images/png/demoblue.png";

const Demo = () => {
  return (
    <section className="pt-lg-5 position-relative">
      <div className="position-absolute  light_green_set">
        <img src={videoblur} alt="videoblur" />
      </div>
      <div className="position-absolute  light_blue_set">
        <img src={videoblueblur} alt="videoblur" />
      </div>
      <Container className="pt-5">
        <div className="position-absolute">
          <img src={demoblue} alt="demoblue" />
        </div>
        <Col lg={9} className="m-auto">
          <div className="position-relative text-center befor e_img">
            <img className="w-100 " src={graygroup} alt="videoimg" />
            <div className="text-center position-absolute top_33 l_25 l_xxl_25 top_xxl_33">
              <h1 className="ff_segoe fw_600 fs_6xl clr_white">Watch a demo</h1>
              <div className="mt-sm-4 mt-3">
                <img
                  className="crsr_pointr w_xsm_9"
                  src={whiteplaybtn}
                  alt="whiteplaybtn"
                />
              </div>
              <p className="ff_segoe fw_600 fs_lg clr_white mt_31 mt_xsm_20">
                Catalyze AI is a predictive analytics business development
                platform
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
}

export default Demo