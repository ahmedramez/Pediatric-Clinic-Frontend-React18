import ResetButton from "../buttons/reset-button";
import SubmmitButton from "../buttons/submit-button";

import DateInput from "../date-input";
import ModalFooter from "../modal-footer";
import ModalHeader from "../modal-header";
import NumberInput from "../number-input";
import RadioInput from "../radio-input";
import SelectInput from "../select-input";
import TextInput from "../text-input";
import TextareaInput from "../textarea-input";

const CreateFileModal = () => {
  // const genderOnChangeHandler = (event) => {
  //   console.log("genderOnChangeHandler: ", event);
  // };
  const radioOnChangeHandler = (event) => {
    console.log("radio changed");
  };
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
              <ModalHeader title="إنشاء ملف جديد" />

              <div className="row m-0 p-2">
                <div className="col-4 my-1 px-1">
                  <TextInput placeholder="الإسم الأول" />
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput placeholder="الإسم الأوسط" />
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput placeholder="الإسم الأخير" />
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput placeholder="سبب دخول الحضانة" />
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput placeholder="مشاكل الولادة" />
                </div>
                <div className="col-4 my-1 px-1">
                  <DateInput title="تاريخ الميلاد" name="mm" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="hhh" placeholder="وزن الولادة" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="hhhff" placeholder="محيط الرأس عند الولادة" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="h5641f" placeholder="العيوب الخلقية" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="hhh" placeholder="وزن الولادة" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="hhhff" placeholder="محيط الرأس عند الولادة" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="h5641f" placeholder="العيوب الخلقية" />
                </div>

                <div className="col-3 my-1 px-1">
                  <SelectInput
                    name="gov"
                    title="المحافظة"
                  />
                </div>
                <div className="col-3 my-1 px-1">
                  <TextInput placeholder="المدينة" />
                </div>
                <div className="col-3 my-1 px-1">
                  <TextInput placeholder="القرية" />
                </div>
                <div className="col-3 my-1 px-1">
                  <TextInput placeholder="الشارع" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="mo1" placeholder="موبايل 1" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput name="mo" placeholder="موبايل 2" />
                </div>
                <div className="col-12 my-1 px-1">
                  <div className="row m-0">
                    <div className="col-6 p-0 pe-1">
                      <RadioInput
                        onChangeHandler={radioOnChangeHandler}
                        title="ذكر"
                        name="Gender"
                        value="male"
                        checked={true}
                      />
                    </div>
                    <div className="col-6 p-0 ps-1">
                      <RadioInput
                        onChangeHandler={radioOnChangeHandler}
                        title="أنثى"
                        name="Gender"
                        value="female"
                        checked={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-4 px-1">
                  <TextareaInput
                    placeholder="التاريخ المرضى"
                    name="pastHistoryOfDisease"
                  />
                </div>
                <div className="col-4 px-0">
                  <TextareaInput
                    placeholder="التاريخ الجراحى"
                    name="pastHistoryOfOperation"
                  />
                </div>
                <div className="col-4 px-1">
                  <TextareaInput placeholder="ملاحظات" name="notes" />
                </div>
              </div>

              <ModalFooter>
                <SubmmitButton
                color="green"
                  title="أنشئ الآن"
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
export default CreateFileModal;
