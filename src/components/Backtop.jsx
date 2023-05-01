import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import toparrow from "../images/svg/toparrow.svg"

const Backtop = () => {
    const [first, setfirst] = useState(true);
    const onTop = () => {
      document.documentElement.scrollTop = 0;
    };
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setfirst(false);
      } else {
        setfirst(true);
      }
    });
  return (
    <div>
      <Container>
        <div className="z_index_10">
          <img
            height={60}
            onClick={() => onTop()}
            className={
              first
                ? "d-none backtotop_btn position-fixed"
                : "d-block backtotop_btn position-fixed"
            }
            src={toparrow}
            alt="image"
          />
        </div>
      </Container>
    </div>
  );
}

export default Backtop