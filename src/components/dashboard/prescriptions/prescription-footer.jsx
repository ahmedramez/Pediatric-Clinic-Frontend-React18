import styles from "./prescription-footer.module.css";
const PrescriptionFooter = () => {
  return (
    <div className={`${styles.prescriptionFooter}`}>
      سرس الليان - شارع بور سعيد - 200م من كوبرى المرور - إتجاه الباجور.
      <br />
      صفحة العبادة على فيسبوك: عيادة الدكتورة/ريهام الشماخ.
      <br />
      المواعيد: من 5م إلى 9م ماعدا الجمعة.
    </div>
  );
};
export default PrescriptionFooter;
