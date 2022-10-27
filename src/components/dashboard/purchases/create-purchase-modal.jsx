import ResetButton from "../buttons/reset-button";
import SubmitButton from "../buttons/submit-button";
import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import NumberInput from "../number-input";
import SelectInput from "../select-input";

const CreatePurchasesModal = () => {
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
              <ModalHeader title="تسجيل مشتريات" />

              <div className="row m-0 p-2">
                <div className="col-4">
                  <SelectInput
                    name="tool"
                    title="إسم الآداة"
                  />
                </div>
                <div className="col-4">
                  <NumberInput name="price" placeholder="السعر"/>
                </div>
                <div className="col-4">
                  <NumberInput name="quantity" placeholder="الكمية/العدد"/>
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
export default CreatePurchasesModal;
