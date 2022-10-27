import HideModalButton from "../buttons/hide-modal-button";
import SubmitButton from "../buttons/submit-button";
import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";

const DeleteFileModal = ({fileData,modalId}) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("submitFormHandler:  Form submitted");
  };
  return (
    <div>
      <div
        className="modal fade bg-blue-dark"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="createNewFileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl modal-dialog-centered">
          <div className="modal-content bg-blue-light">
            <form>
              <ModalHeader title={`حذف ملف ${fileData.firstName}`} />

              <h1 className="text-danger text-center">
                هل تريد حذف ملف {fileData.firstName}
              </h1>
              <p className="text-center text-white">
                إذا قمت بالحذف لن تستطيع إستعادة الملف أو الروشتات المرتبطة به مرة أخرى!
              </p>
              <ModalFooter>
                <SubmitButton
                color="red"
                  title="إحذف"
                  clickHandler={submitFormHandler}
                />
                <HideModalButton title="تراجع" />
              </ModalFooter>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteFileModal;
