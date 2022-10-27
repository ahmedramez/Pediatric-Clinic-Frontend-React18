import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrescriptionFooter from "../../../components/dashboard/prescriptions/prescription-footer";
import PrescriptionHeader from "../../../components/dashboard/prescriptions/prescription-header";
import PrescriptionTreatmentRecord from "../../../components/dashboard/prescriptions/prescription-treatment-record";
import styles from "../../../components/dashboard/prescriptions/prescription.module.css";

const PrintPrescription = ({ treatments }) => {
    let printWorked=false;
  useEffect(() => {
if (!printWorked) {
    window.print();
    printWorked=true;
}

    return () => {
      navigate("/Dashboard/New-Prescription/SFFS");
    };
  },[]);

  const navigate = useNavigate();
  return (
    <div id="printSection" style={{ backgroungColor: "red" }}>
      <div className={`${styles.prescriptionPaper}`} style={{ margin: "auto" }}>
        <PrescriptionHeader />
        <div className={`${styles.prescriptionPaperBody}`}>
          <PrescriptionTreatmentRecord />
        </div>
        <PrescriptionFooter />
      </div>
    </div>
  );
};
export default PrintPrescription;
