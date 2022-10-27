import { Outlet } from "react-router-dom";
import WebsiteManagementSideMenuOptions from "../../../components/dashboard/website-management/side-menu-options";

const WebsiteManagement = () => {
  return <div className="row">
    <div className="col-4">
      <WebsiteManagementSideMenuOptions/>
    </div>
    <div className="col-8">
      <Outlet/>
    </div>
  </div>
};

export default WebsiteManagement;
