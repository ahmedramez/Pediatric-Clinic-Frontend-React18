import { Fragment } from "react";
import "./side-menu-statistics.css";
const SideMenuStatistics = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-4 d-flex flex-column  justify-content-between">
        <div className="prescriptions-statistics-menu rounded">
          <h1 className="statistics-menu-header m-0 text-center fs-2">كشوفات اليوم</h1>
          <div className="statistics-menu-items scrollbar-style2 overflow-scroll">
            <ul>
            <li className="statistics-menu-item">
                <a
                  href="/"
                  className="text-decoration-none px-2 d-block"
                >
                  أنس عمرو
                  <span className="prescriptions-statistics-menu-time position-absolute text-center">
                    am 08:00 
                  </span>
                </a>
              </li>
              <li className="statistics-menu-item">
                <a
                  href="/"
                  className="text-decoration-none px-2 d-block"
                >
                  أنس عمرو
                  <span className="prescriptions-statistics-menu-time position-absolute text-center">
                    am 08:00 
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="prescriptions-statistics-menu rounded mt-5">
          <h1 className="statistics-menu-header m-0 text-center fs-2 bg-twitter-light">
            إستشارات اليوم
          </h1>
          <div className="statistics-menu-items scrollbar-blue overflow-scroll">
            <ul>
            <li className="statistics-menu-item">
                <a
                  href="/"
                  className="text-decoration-none px-2 d-block"
                >
                  روفان عمرو
                  <span className="prescriptions-statistics-menu-time position-absolute text-center">
                    pm 09:30 
                  </span>
                </a>
              </li>
              <li className="statistics-menu-item">
                <a
                  href="/"
                  className="text-decoration-none px-2 d-block"
                >
                  روفان عمرو
                  <span className="prescriptions-statistics-menu-time position-absolute text-center">
                    pm 09:30 
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideMenuStatistics;
