import SubmitButton from "../buttons/submit-button";
import ModalHeader from "../modal-header";
import TextInput from "../text-input";

const SearchToolsModal = () => {
  return (
    <div>
      <div className="modal fade" id="searchForPatientFileModal" tabIndex="-1" aria-labelledby="searchForPatientFileModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content bg-blue-light">
            <form>
            <ModalHeader title="بحث عن آداة"/>
              <div className="row mx-0 mb-3">
                <div className="col-7">
                <TextInput name="name" placeholder="إسم الآداة" />
                </div>
                <div className="col-5">
                  <SubmitButton title="بحث" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchToolsModal;