import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "../../../assets/dashboard-styles.css";
import Navbar from "./navbar";
const DashboardLayout = (props) => {
  return (
    <Fragment>
      <div className="dashboard-pages-container">
        <div className="dashboard-page-size mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
export default DashboardLayout;
