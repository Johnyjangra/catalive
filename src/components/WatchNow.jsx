import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import whiteplaybtn from "../images/svg/whiteplaybtn.svg";
import graygroup from "../images/svg/graygroup.png";
import demoblue from "../images/png/demoblue.png";
import demogreen from "../images/png/demogreen.png";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="position-relative pt-5 mt-5 overflow- hidden">
      {/* <div className="position-absolute demo_blue">
        <img src={demoblue} alt="demoblue" />
      </div> */}
      {/* <div className="position-absolute demp_green z_m1">
      </div> */}
      <Container>
        <div onClick={handleShow}>
          <Col lg={9} className="m-auto">
            <div className="position-relative text-center befor e_img">
              <img className="w-100 " src={graygroup} alt="videoimg" />
              <div className="text-center position-absolute top_33 l_25 l_xxl_25 top_xxl_33">
                <h1 className="ff_segoe fw_600 fs_6xl clr_white">
                  Watch a demo
                </h1>
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
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <iframe
              className="w_xsm_250"
              width="465"
              height="310"
              src="https://www.youtube.com/embed/odJiXmFbSEc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
      </Container>
    </section>
  );
}

export default Example;
