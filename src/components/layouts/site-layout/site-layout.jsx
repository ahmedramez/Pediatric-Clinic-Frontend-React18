import React, { Fragment, useRef } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import "../../../assets/site-styles.css";
const SiteLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </Fragment>
  );
};
export default SiteLayout;

const BackToTopButton = () => {
  const backToTopRef = useRef();
  const clickHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = function () {
    if (backToTopRef && backToTopRef.current !== null) {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (backToTopRef.current.style.display = "block")
        : (backToTopRef.current.style.display = "none");
    }
  };
  return (
    <span>
      <svg
        ref={backToTopRef}
        onClick={clickHandler}
        id="back-to-top-btn"
        width="32"
        height="32"
        fill="#bb0102"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
      </svg>
    </span>
  );
};
