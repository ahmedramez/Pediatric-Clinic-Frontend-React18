import styles from "./prescription-header.module.css";
const PrescriptionHeader = () => {
  return (
    <div className={`${styles.prescriptionHeader}`}>
      <div className={`${styles.rightSection}`}>
        <p className="m-0 fw-bold">دكتورة</p>
        <p className="m-0 fw-bold">ريهام سعيد الشماخ</p>
        <p className="m-0 fw-bold">أخصائى طب الأطفال وحديثى الولادة</p>
        <p className="m-0 fw-bold">ماجستير طب الأطفال</p>
        <p className="m-0 fw-bold">م. منوف العام</p>
      </div>
      <div className={`${styles.middleSection}`}>
        <div
          className={`${styles.imageContainer} position-absolute m-0 p-0`}
          style={{
            backgroundImage:
              "url(	https://www.drrajeshclinic.com/images/logo.png)",
          }}
        ></div>
      </div>
      <div className={`${styles.leftSection} `}>
        <p className="m-0 fw-bold p-0 text-center"> الإسم: أنس عمرو المغربى </p>
        <p className="m-0 fw-bold text-center">
          <span>2022</span>-<span>10</span>-<span>21</span>
        </p>
        <i className="col-12 m-0 text-center">
          Fri 07:53pm
        </i>
      </div>
    </div>
  );
};
export default PrescriptionHeader;
