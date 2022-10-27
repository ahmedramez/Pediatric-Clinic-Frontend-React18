import SubmitButton from "../buttons/submit-button";
import ModalHeader from "../modal-header";
import NumberInput from "../number-input";
const SearchPaymentsModal = () => {
  return (
    <div>
      <div className="modal fade" id="searchForPatientFileModal" tabIndex="-1" aria-labelledby="searchForPatientFileModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-blue-light">
            <form>
            <ModalHeader title="بحث عن مدفوعات"/>
              <div className="row mx-0 mb-3">
              <div className="col-3">
                <NumberInput name="month" placeholder="الشهر" />
                </div>
                <div className="col-4">
                <NumberInput name="year" placeholder="عام" />
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

export default SearchPaymentsModal;