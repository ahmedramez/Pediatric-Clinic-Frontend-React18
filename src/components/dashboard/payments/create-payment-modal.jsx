import ResetButton from "../buttons/reset-button";
import SubmitButton from "../buttons/submit-button";
import DateInput from "../date-input";
import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import NumberInput from "../number-input";

const CreatePaymentModal = () => {
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
              <ModalHeader title="تسجيل مدفوعات" />

              <div className="row m-0 p-2">
                <div className="my-1 col-2">
                  <NumberInput name="water" placeholder="مياه" />
                </div>
                <div className="my-1 col-4">
                  <DateInput name="waterPaymentDate" title="تاريخ دفع المياه" />
                </div>
                <div className="my-1 col-2">
                  <NumberInput name="gas" placeholder="غاز" />
                </div>
                <div className="my-1 col-4">
                  <DateInput name="gasPaymentDate" title="تاريخ دفع الغاز" />
                </div>
                <div className="my-1 col-2">
                  <NumberInput name="electricity" placeholder="كهرباء" />
                </div>
                <div className="my-1 col-4">
                  <DateInput name="electricityPaymentDate" title="تاريخ دفع الكهرباء" />
                </div>
                <div className="my-1 col-2">
                  <NumberInput name="rent" placeholder="إيجار" />
                </div>
                <div className="col-4">
                  <DateInput name="rentPaymentDate" title="تاريخ دفع الإيجار" />
                </div>
                <div className="my-1 col-2">
                  <NumberInput name="wage" placeholder="مرتب السكرتيره" />
                </div>
                <div className="my-1 col-4">
                  <DateInput name="wagePaymentDate" title="تاريخ دفع المرتب" />
                </div>
                <div className="my-1 col-2">
                  <NumberInput name="other" placeholder="أخرى" />
                </div>
                <div className="my-1 col-4">
                  <DateInput name="otherPaymentDate" title="تاريخ دفع الأخرى" />
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
export default CreatePaymentModal;
