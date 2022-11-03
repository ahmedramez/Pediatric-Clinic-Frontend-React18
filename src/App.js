import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Articles from "./pages/site/articles";
import DashboardLayout from "./components/layouts/dashboard-layout/dashboard-layout";
import SiteLayout from "./components/layouts/site-layout/site-layout";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/site/home";
import NewsPage from "./pages/site/news-page";
import Vaccines from "./pages/site/vaccines";
import AboutDoctor from "./pages/site/about-doctor";
import ViewArticle from "./pages/site/view-article";
import Login from "./pages/site/login";
import React from "react";
import ViewAllFilePrescriptions from "./pages/dashboard/prescripions/all-file-prescriptions";
import NewPrescription from "./pages/dashboard/prescripions/new-prescription";
import PrintPrescription from "./pages/dashboard/prescripions/print-prescription";
import WebsiteManagement from "./pages/dashboard/website/website-management";
import NameAndLogoMgmt from "./components/dashboard/website-management/name-and-logo-mgmt";
import SliderManagement from "./components/dashboard/website-management/slider-mgmt";
import ServicesMgmt from "./components/dashboard/website-management/services-mgmt";
import ArticlesMgmt from "./components/dashboard/website-management/articles-mgmt";
import NewsMgmt from "./components/dashboard/website-management/news-mgmt";
import VaccinesMgmt from "./components/dashboard/website-management/vaccines-mgmt";
import { useStore } from "./hooks-store/store";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/*" element={<SiteLayout />}>
//         <Route path="Home" element={<Home />} />
//         <Route path="Articles" element={<Articles />} />
//         <Route path="Articles/:id" element={<ViewArticle />} />
//         <Route path="News" element={<NewsPage />} />
//         <Route path="Vaccines" element={<Vaccines />} />
//         <Route path="*" element={<Home />} />
//       </Route>
//       <Route path="/About-Doctor" element={<AboutDoctor />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Dashboard/*" element={<DashboardLayout />}>
//         <Route path="*" element={<Dashboard />} />
//         <Route path="Prescriptions/:fileId" element={<ViewAllFilePrescriptions />}/>
//         <Route path="New-Prescription/:fileId" element={<NewPrescription />} />
//         <Route path="Website-Management" element={<WebsiteManagement />}>
//           <Route path="Name-and-Logo" element={<NameAndLogoMgmt />} />
//           <Route path="Slideshow" element={<Slideshow />} />
//           <Route path="Services" element={<ServicesMgmt />} />
//           <Route path="Articles" element={<ArticlesMgmt />} />
//           <Route path="News" element={<NewsMgmt />} />
//           <Route path="Vaccines" element={<VaccinesMgmt />} />
//         </Route>
//       </Route>
//       <Route
//         path="/Dashboard/Print-Prescription"
//         element={<PrintPrescription />}
//       />
//     </Route>
//   )
// );

function App() {
  const state = useStore(true)[0];
  const displayDashboard =
    state.login.isLoggedIn && state.login.role === "Doctor";
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path="/*" element={<SiteLayout />}>
              <Route path="Home" element={<Home />} />
              <Route path="Articles" element={<Articles />} />
              <Route path="Articles/:id" element={<ViewArticle />} />
              <Route path="News" element={<NewsPage />} />
              <Route path="Vaccines" element={<Vaccines />} />
              <Route path="*" element={<Home />} />
            </Route>
            <Route path="/About-Doctor" element={<AboutDoctor />} />
            <Route path="/Login" element={<Login />} />
            {displayDashboard && (
              <Route path="/Dashboard/*" element={<DashboardLayout />}>
                <Route path="*" element={<Dashboard />} />
                <Route path="Prescriptions/:fileId" element={<ViewAllFilePrescriptions />}/>
                <Route path="New-Prescription/:fileId" element={<NewPrescription />}/>
                <Route path="Website-Management/*" element={<WebsiteManagement />}>
                  <Route path="Name-and-Logo" element={<NameAndLogoMgmt />} />
                  <Route path="SliderManagement" element={<SliderManagement />} />
                  <Route path="Services" element={<ServicesMgmt />} />
                  <Route path="Articles" element={<ArticlesMgmt />} />
                  <Route path="News" element={<NewsMgmt />} />
                  <Route path="Vaccines" element={<VaccinesMgmt />} />
                </Route>
              </Route>
            )}
            <Route path="/Dashboard/Print-Prescription" element={<PrintPrescription />}/>
          </Route>
        )
      )}
    />
  );
}

export default App;
