import { Col, Container, Row } from "react-bootstrap";
import greenrc from "../images/svg/greenrc.svg";
import greenpm from "../images/svg/greenpm.svg";
import coma from "../images/svg/coma.svg";
import slideblur from "../images/png/slideblur.png";
import blueslide from "../images/png/blueslide.png";
import React from 'react'
import Slider from "react-slick";


function Move() {
     var settings = {
       dots: false,
       infinite: true,
       arrows: false,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 2,
       responsive: [
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             dots: true,
             arrows: true,
           },
         },
         {
           breakpoint: 767,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             dots: true,
             arrows: true,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
             arrows: true,
           },
         },
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ],
     };
  return (
    <section className="pt-5 bg_b lue overflow-hidden">
      <Container className="pt-5 position-relative">
        <h1 className="ff_segoe fw_600 fs_5xl clr_black text-center">
          See what our users say{" "}
        </h1>
        <div className="position-absolute slideblurset">
          <img src={slideblur} alt="slideblur" />
        </div>
        <div className="position-absolute blueset">
          <img src={blueslide} alt="slideblur" />
        </div>
        <Slider className="pt-5">
          <Col lg={6}>
            <div className="bg_white rdc_10 ps_45 pb_56 pe_52">
              <div className="d-flex align-items-center justify-content-between pt_55 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={greenrc} alt="greenrc" />
                  </div>
                  <div className="ps_30">
                    <h1 className="mb-0 ff_segoe fw_600 fs_xl clr_black">
                      Richard Chung
                    </h1>
                    <p className="mb-0 ff_segoe fw_400 fs_xsm clr_lytblack">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <div>
                  <img src={coma} alt="coma" />
                </div>
              </div>
              <p className="ff_segoe fw_400 fs_md clr_lytblack pt-5 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg_white rdc_10 ps_45 pb_56 pe_52">
              <div className="d-flex align-items-center justify-content-between pt_55 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={greenpm} alt="greenrc" />
                  </div>
                  <div className="ps_30">
                    <h1 className="mb-0 ff_segoe fw_600 fs_xl clr_black">
                      Paul Morris
                    </h1>
                    <p className="mb-0 ff_segoe fw_400 fs_xsm clr_lytblack">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <div>
                  <img src={coma} alt="coma" />
                </div>
              </div>
              <p className="ff_segoe fw_400 fs_md clr_lytblack pt-5 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg_white rdc_10 ps_45 pb_56 pe_52">
              <div className="d-flex align-items-center justify-content-between pt_55 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={greenpm} alt="greenrc" />
                  </div>
                  <div className="ps_30">
                    <h1 className="mb-0 ff_segoe fw_600 fs_xl clr_black">
                      Paul Morris
                    </h1>
                    <p className="mb-0 ff_segoe fw_400 fs_xsm clr_lytblack">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <div>
                  <img src={coma} alt="coma" />
                </div>
              </div>
              <p className="ff_segoe fw_400 fs_md clr_lytblack pt-5 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg_white rdc_10 ps_45 pb_56 pe_52">
              <div className="d-flex align-items-center justify-content-between pt_55 ">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={greenpm} alt="greenrc" />
                  </div>
                  <div className="ps_30">
                    <h1 className="mb-0 ff_segoe fw_600 fs_xl clr_black">
                      Paul Morris
                    </h1>
                    <p className="mb-0 ff_segoe fw_400 fs_xsm clr_lytblack">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <div>
                  <img src={coma} alt="coma" />
                </div>
              </div>
              <p className="ff_segoe fw_400 fs_md clr_lytblack pt-5 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
        </Slider>
      </Container>
    </section>
  );
}

export default Move