import SubmitButton from "../buttons/submit-button";
import ModalHeader from "../modal-header";
import TextInput from "../text-input";

const CreateToolModal = () => {
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
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content bg-blue-light">
            <form>
              <ModalHeader title="تسجيل آداة جديدة" />
              <div className="row mx-0 mb-3">
                <div className="col-7">
                  <TextInput name="name" placeholder="إسم الآداة" />
                </div>
                <div className="col-5">
                  <SubmitButton title="تسجيل" clickHandler={submitFormHandler} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateToolModal;
