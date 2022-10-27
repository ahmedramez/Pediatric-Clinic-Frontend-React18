import { useNavigate } from "react-router-dom";
import PrescriptionFooter from "./prescription-footer";
import PrescriptionHeader from "./prescription-header";
import PrescriptionTreatmentRecord from "./prescription-treatment-record";
import styles from "./prescription.module.css";

const Prescription = ({ data }) => {
  const navigate = useNavigate();
  const printButtonClickHandler = (event) => {
    navigate("/Dashboard/Print-Prescription");
    // console.log(event);
    // var restorepage = document.body.innerHTML;
    // var printcontent = document.getElementById("printSection").innerHTML;
    // document.body.innerHTML = printcontent;
    // window.print();
    // document.body.innerHTML = restorepage;
  };
  return (
    <div className="m-0 p-0 position-relative">
      <span
        onClick={printButtonClickHandler}
        style={{ cursor: "pointer", zIndex: "999" }}
        className="position-absolute"
      >
        <img width="40" src="https://freeiconshop.com/wp-content/uploads/edd/print-outline-filled.png" alt="" />
        {/* <svg width="40" height="40" fill="#f00" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg> */}
        {/* <svg width="40" height="40" fill="#f00" viewBox="0 0 16 16"><path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/></svg> */}
      </span>
      <div id="printSection">
        <div className={`${styles.prescriptionPaper}`}>
          <PrescriptionHeader />
          <div className={`${styles.prescriptionPaperBody}`}>
            <PrescriptionTreatmentRecord />
          </div>
          <PrescriptionFooter />
        </div>
      </div>
    </div>
  );
};
export default Prescription;
