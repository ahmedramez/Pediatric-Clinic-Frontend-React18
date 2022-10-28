import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrescriptionFooter from "../../../components/dashboard/prescriptions/prescription-footer";
import PrescriptionHeader from "../../../components/dashboard/prescriptions/prescription-header";
import PrescriptionTreatmentRecord from "../../../components/dashboard/prescriptions/prescription-treatment-record";
import styles from "../../../components/dashboard/prescriptions/prescription.module.css";

const PrintPrescription = ({ treatments }) => {
  let printWorked = 0;
  const navigate = useNavigate();
  useEffect(() => {
    console.log("X")
    if (printWorked === 0) {
      ++printWorked;
      window.print();
    }

    return () => {
      navigate("/Dashboard/New-Prescription/SFFS");
    };
  }, [navigate,printWorked]);

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
