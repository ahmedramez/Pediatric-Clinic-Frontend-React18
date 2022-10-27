// import { useParams } from "react-router-dom";
import TextInput from "../../../components/dashboard/text-input";
import NumberInput from "../../../components/dashboard/number-input";
import SelectInput from "../../../components/dashboard/select-input";
import TextareaInput from "../../../components/dashboard/textarea-input";
import SubmitButton from "../../../components/dashboard/buttons/submit-button";
import Prescription from "../../../components/dashboard/prescriptions/prescription";
import ViewFileModal from "../../../components/dashboard/files/view-file-modal";
import styles from "./new-prescription.module.css";

// import styles from "./all-file-prescriptions.module.css";
const NewPrescription = () => {
  document.title = "روشتة جديدة";
  // const params = useParams();
  // console.log(params.fileId);
  return (
    <div className="col-12">
      {/* <div className="row"> */}
      <section
        className={`${styles.prescriptionDetailsSection} rounded bg-blue-light overflow-hidden`}
      >
        <div className="row rounded ">
          <h4
            className={`${styles.prescriptionDetailsHeader} text-center p-0 bg-gradient rounded-top py-2`}
          >
            تفاصيل الزيارة
            <span
              style={{ right: "1%", top: "30%" }}
              className="fw-bold btn p-0 border-0 text-white position-absolute p-0"
            >
              <a
                className="m-1 text-white fw-bold fs-6 mt-4 text-decoration-none"
                href="./imaging.html"
              >
                الأشعة
              </a>
              |
              <a
                className="m-1 text-white fw-bold fs-6 mt-4 text-decoration-none"
                href="./prescriptionsList.html"
              >
                الروشتات السابقة
              </a>
              |
              <a
                className="m-1 text-white fw-bold fs-6 text-decoration-none"
                href="./laboratoryStudy.html"
              >
                التحاليل
              </a>
            </span>
            <span className={styles.fileDataModalButton}>
              <span data-bs-toggle="modal" data-bs-target="#viewFileDataForPrescriptionModal">
                <svg
                  className="svg-red"
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </svg>
              </span>
            </span>
            <span
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#prescriptionDetailsCollapse"
              style={{ right: "96%", top: "28%" }}
              className={`${styles.prescriptionDetailsCollapseButton} position-absolute accordion-button text-warning collapsed`}
            >
              <svg fill="#fff" width="25" height="25" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              </svg>
            </span>
          </h4>
        </div>
        <hr className={`${styles.textBlueDark} opacity-100 m-0`} />
        <div
          id="prescriptionDetailsCollapse"
          className="accordion-collapse row mx-0 my-3 collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="row m-0 p-0">
            <div className="col-3">
              <TextInput name="price" placeholder="السعر" />
            </div>
            <div className="col-3">
              <SelectInput
                name="type"
                title="نوع الزيارة"
                items={[
                  { text: "كشف", value: "0" },
                  { text: "إستشارة أولى", value: "1" },
                  { text: "إستشارة ثانية", value: "2" },
                  { text: "إستشارة ثالثة", value: "3" },
                ]}
              />
            </div>
            <div className="col-3">
              <NumberInput
                name="nextVisitAfter"
                placeholder="عدد الأيام للإستشارة"
              />
            </div>
            <div className="col-3">
              <NumberInput
                name="nextVisitAfter"
                placeholder="وزن الطفل بالكيلوجرام"
              />
            </div>
            <div className="row m-0 mt-1">
              <div className="col-4 pe-1 p-0">
                <TextareaInput
                  placeholder="تعليمات لمريض"
                  name="pastHistoryOfDisease"
                />
              </div>
              <div className="col-4 p-0">
                <TextareaInput
                  placeholder="التشخيص"
                  name="pastHistoryOfOperation"
                />
              </div>
              <div className="col-4 ps-1 p-0">
                <TextareaInput placeholder="تقييم الزيارة" name="notes" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className={`col-5 m-0 pe-0`}>
          <div
            className={`${styles.addTreatmentSection} d-flex flex-column p-2 my-1`}
          >
            <h1 className="flex-fill text-center text-white">العلاج</h1>
            <div className="flex-fill">
              <SelectInput
                name="medicine"
                title="الدواء"
                items={[
                  { text: "Ceftriaxone", value: "0" },
                  { text: "Congistal", value: "1" },
                  { text: "Flagile", value: "2" },
                  { text: "Ogmantine", value: "3" },
                ]}
              />
            </div>
            <div className="flex-fill mt-1">
              <TextInput name="price" placeholder="أضف علاج ليس بالقائمة" />
            </div>
            <div className="flex-fill mt-1">
              <TextareaInput
                placeholder="طريقة الإستعمال"
                name="pastHistoryOfDisease"
              />
            </div>
            <div className="flex-fill mt-1">
              <SubmitButton width={"100%"} color="blue" title="إكتب للروشتة" />
            </div>
          </div>
        </div>
        <div className="col-7 mx-0 my-1 p-0">
          <Prescription />
        </div>
      </div>
      <ViewFileModal fileData={{id:"xx" , firstName:"folan"}} modalId="viewFileDataForPrescriptionModal"/>
    </div>
  );
};
export default NewPrescription;
