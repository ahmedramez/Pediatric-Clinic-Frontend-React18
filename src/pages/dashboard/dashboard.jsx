import SideMenu from "../../components/dashboard/side-menu";
import DoctorProfile from "../../components/dashboard/doctor-profile";
import SideMenuStatistics from "../../components/dashboard/side-menu-ststistics";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Bookings from "./bookings";
import Files from "./files/files";
import Medicines from "./medicines/medicines";
import Tools from "./tools/tools";
import Payments from "./payments/payments";
import Purchases from "./purchases/purchases";
import ViewAllFiles from "./files/view-all";
import SearchResult from "./files/search-result";
import ViewAllFilePrescriptions from "./prescripions/all-file-prescriptions";
const Dashboard = () => {
  document.title = "الإدارة";
  return (
    <div className="row">
        <div className="col-4">
          <SideMenu />
        </div>
      <Routes>
        <Route path="Files/*">
          <Route path="*" element={<Files />} />
          <Route path="View-all" element={<ViewAllFiles />} />
          <Route path="Search" element={<SearchResult />} />
          <Route path="View-all/:fileId" element={<ViewAllFilePrescriptions />}/>
        </Route>
        <Route path="Medicines" element={<Medicines />} />
        <Route path="Tools" element={<Tools />} />
        <Route path="Payments" element={<Payments />} />
        <Route path="Purchases" element={<Purchases />} />
        <Route path="Bookings" element={<Bookings />} />
        <Route path="*" element={<Fragment><DoctorProfile /><SideMenuStatistics /></Fragment>}/>
      </Routes>
    </div>
  );
};
export default Dashboard;
