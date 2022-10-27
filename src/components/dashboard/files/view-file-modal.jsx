import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import HideModalButton from "../buttons/hide-modal-button";
const ViewFileModal = ({ fileData, modalId }) => {
  return (
    <div>
      <div
        className="modal fade bg-blue-dark"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="createNewFileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-fullscreen">
          <div className="modal-content bg-blue-light">
            <ModalHeader title={`بيانات ${fileData.firstName}`} />

            <ModalFooter>
              <HideModalButton title="Ok"/>
            </ModalFooter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewFileModal;
