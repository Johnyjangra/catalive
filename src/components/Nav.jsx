import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from "../images/svg/logo.svg"
import step from "../images/svg/step.svg";
import home from "../images/svg/home.svg";
import cross from "../images/svg/cross.jpeg";
import greenarrow from "../images/svg/greenarrow.svg";

const Nav = () => {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(true)
  return (
    <nav className="bg_white rdc_8 py_30 m_15 mx_xsm_0">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <a href="#">
              <img className="w_xsm_80" src={logo} alt="logo" />
            </a>
            <div
              className={
                second
                  ? "left_m100 d-flex ms_80 service ms_md_0"
                  : "left_50 d-flex ms_80 service ms_md_0"
              }
            >
              <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                <img src={step} alt="step" />
                <div className="ps_13">
                  <h2 className="ff_segoe fw_600 fs_md clr_black mb-0 before_green_line fs_xsm_22">
                    Financial Services
                  </h2>
                </div>
              </div>
              <div className="d-flex align-items-center ms_50 ms_md_0 justify-content-md-start justify-content-center mt-md-0 mt-4">
                <div>
                  <img src={home} alt="step" />
                </div>
                <div className="ps_13">
                  <h2 className="ff_segoe fw_600 fs_md clr_black mb-0 before_green_line fs_xsm_22">
                    Real Estate
                  </h2>
                </div>
              </div>
              <img
                onClick={() => {
                  setsecond(true);
                }}
                className="w_15 position-absolute top_7 right_51 d-md-none d-block"
                src={cross}
                alt="cross"
              />
            </div>
            <div className="ms-sm-4 ms-2 d-md-none d-block">
              <a
                onClick={() => {
                  setsecond(false);
                }}
                className="ff_segoe fw_400 fs_sm clr_green"
                href="#"
              >
                Services....
              </a>
            </div>
          </div>

          <div
            className={
              first
                ? "top_m50 d-flex align-items-center mobile_ul"
                : "top_0 d-flex align-items-center mobile_ul"
            }
          >
            <button className="ff_segoe fw_600 fs_md clr_green bg_trnsprnt white_border py-2  px-3 hover_border me-4">
              Sign up
            </button>

            <div className="green_border rdc_5 ps-3 py-2 pe-4 ms-2 hover_bordr_none cursr_pointer">
              <a
                className="ff_segoe fw_600 fs_md clr_green hovr_clr_green"
                href="#"
              >
                Log in
              </a>
              <img className="ps-4" src={greenarrow} alt="greenarrow" />
            </div>

            <img
              onClick={() => {
                setfirst(true);
              }}
              className="w_30 position-absolute top_7 right_51 d-lg-none d-block"
              src={cross}
              alt="cross"
            />
          </div>
          <div
            className="d-lg-none d-block"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav