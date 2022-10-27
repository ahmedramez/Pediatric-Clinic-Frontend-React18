import ResetButton from "../buttons/reset-button";
import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import TextInput from "../text-input";
import SubmitButton from "../buttons/submit-button";

const CreateMedicineModal = () => {

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("submitFormHandler:  Form submitted");
  };
  return (
    <div>
      <div
        className="modal fade bg-blue-dark"
        data-bs-backdrop="static"
        id="createNewFileModal"
        tabIndex="-1"
        aria-labelledby="createNewFileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content bg-blue-light">
            <form>
              <ModalHeader title="تسجيل دواء جديد" />

              <div className="row m-0 p-2">
              <div className="col-6 my-1">
                  <TextInput name="name" placeholder="إسم الدواء" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="الجرعة" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="عمر الإستخدام" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="الحساسية" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="تعليمات الإستعمال" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="الآثار الجانبية" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="التفاعلات الدوائية" />
                </div>
                <div className="col-6 my-1">
                  <TextInput name="name" placeholder="المواد الفعالة" />
                </div>
                <div className="col-12 my-1">
                  <TextInput name="name" placeholder="تحذيرات الإستعمال" />
                </div>
              </div>

              <ModalFooter>
                <SubmitButton title="تسجيل" clickHandler={submitFormHandler} />
                <ResetButton title="تفريغ الحقول" />
              </ModalFooter>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateMedicineModal;
