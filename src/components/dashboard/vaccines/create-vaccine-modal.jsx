import ResetButton from "../buttons/reset-button";
import SubmitButton from "../../../components/dashboard/buttons/submit-button";

import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import TextInput from "../text-input";

const CreateVaccineModal = () => {
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
              <ModalHeader title="إضافة لقاح جديد" />

              <div className="row m-0 p-2">
                <div className="col-6">
                  <TextInput name="name" placeholder="إسم اللقاح" />
                </div>
                <div className="col-6">
                  <TextInput name="age" placeholder="العمر" />
                </div>
                <div className="col-12 my-1">
                  <TextInput name="availableAt" placeholder="المواعيد" />
                </div>
                <div className="col-12 my-1">
                  <TextInput name="description" placeholder="الوصف" />
                </div>
              </div>

              <ModalFooter>
                <SubmitButton
                  title="أضف الآن"
                  clickHandler={submitFormHandler}
                />
                <ResetButton title="تفريغ الحقول" />
              </ModalFooter>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateVaccineModal;
