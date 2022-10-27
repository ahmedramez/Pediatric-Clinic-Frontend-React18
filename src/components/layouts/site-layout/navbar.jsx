import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarTogglerRef = useRef();
  const navlinlClickHandler = () => {
    // Collapse Navbar
    navbarTogglerRef.current.click();
  };
  return (
    <nav className="navbar navbar-expand-lg p-0 site-nav">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold m-0 site-navbar-brand">
          <img
            className="navbar-brand-img"
            src="https://www.drrajeshclinic.com/images/logo.png"
            alt="clinic logo"
          />
          عيادة الدكتورة ريهام
        </NavLink>
        <button
          ref={navbarTogglerRef}
          className="navbar-toggler p-1 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item site-nav-item">
              <NavLink
                to="/"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
                aria-current="page"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/Articles"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                المقالات
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/News"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                الأخبار
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/Vaccines"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                التطعيمات
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/About-Doctor"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                عن الدكتورة
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/Login"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                دخول
              </NavLink>
            </li>
            <li className="nav-item site-nav-item">
              <NavLink
                to="/Dashboard"
                onClick={navlinlClickHandler}
                className="nav-link fw-bold"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;