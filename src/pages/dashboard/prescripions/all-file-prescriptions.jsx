import { Fragment } from "react";
// import { useParams } from "react-router-dom";
import Prescription from "../../../components/dashboard/prescriptions/prescription";
import styles from "./all-file-prescriptions.module.css";
import { Link } from "react-router-dom";
// import styles from "./all-file-prescriptions.module.css";
const ViewAllFilePrescriptions = () => {
  // const params = useParams();
  return (
    <Fragment>
      <div className="row m-0 mb-4">
        <div className="col-5 p-2 d-flex flex-column justify-content-start">
          <div className="row m-0">
            <div className="col-3">
              <Link to="/" className={styles.prescriptionEditLink}>تعديل</Link>
            </div>
            <div className="col-3">
            <Link to="/" className={styles.prescriptionLabStudyLink}>التحاليل</Link>
            </div>
            <div className="col-3">
            <Link to="/" className={styles.prescriptionImagingLink}>الأشعة</Link>
            </div>
            <div className="col-3">
            <button className={styles.prescriptionDeleteBtn}>حذف</button>
            </div>
          </div>
          <div className={`${styles.prescriptionSideDetailContainer} mb-5`}>
            <div className="card text-bg-dark">
              <h5 className="card-header">التشخيص</h5>
              <div className="card-body">
                <p className="card-text">
                نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه
                  وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او
                  فلاير
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.prescriptionSideDetailContainer} mb-5`}>
            <div className="card text-bg-dark">
              <h5 className="card-header">تعليمات للمريض</h5>
              <div className="card-body">
                <p className="card-text">
                  نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه
                  وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او
                  فلاير
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.prescriptionSideDetailContainer} mb-5`}>
            <div className="card text-bg-dark">
              <h5 className="card-header">تقييم الزيارة</h5>
              <div className="card-body">
                <p className="card-text">
                  نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه
                  وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او
                  فلاير
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 m-0 p-0">
          <Prescription />
        </div>
      </div>
    </Fragment>
  );
};
export default ViewAllFilePrescriptions;
