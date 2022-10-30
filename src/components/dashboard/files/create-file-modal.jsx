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
import { userFile } from "../../../utility/file-model";
import { useState } from "react";
import { validateName } from "../../../utility/create-file-validators";
import { validateEmail } from "../../../utility/validate-email";

const CreateFileModal = () => {
  const [file, setFile] = useState(userFile);
  const [errors, setErrors] = useState({});
  const nameChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const isNotValid = validateName(value);
    if (isNotValid) {
      if (name === "firstName") setErrors({ ...errors, firstName: isNotValid });
      if (name === "middleName")
        setErrors({ ...errors, middleName: isNotValid });
      if (name === "lastName") setErrors({ ...errors, lastName: isNotValid });
    } else {
      const formErrors = { ...errors };
      delete formErrors[name];
      setErrors(formErrors);
    }
    if (name === "firstName") setFile({ ...file, firstName: value });
    if (name === "middleName") setFile({ ...file, middleName: value });
    if (name === "lastName") setFile({ ...file, lastName: value });
  };

  const emailChangeHandler = (event) => {
    const value = event.target.value;
    const isValid = validateEmail(value);
    if (!isValid) {
      setErrors({ ...errors, email: "أدخل إيميل صالح" });
    } else {
      const formErrors = { ...errors };
      delete formErrors.email;
      setErrors(formErrors);
    }
    setFile({ ...file, email: value });
  };

  const causeOfNicuAdmissionChangeHandler = (event) => {
    setFile({ ...file, causeOfNicuAdmission: event.target.value.trim() });
  };
  const labourProblemsChangeHandler = (event) => {
    setFile({ ...file, labourProblems: event.target.value.trim() });
  };
  const requiredOnlyInputChangeHandler = (event) => {
    const value = event.target.value.trim();
    const name = event.target.name.trim();
    if (!event.target.value.trim()) {
      if (name === "birthWeight")
        setErrors({ ...errors, birthWeight: "هذا الحقل إجبارى" });
      if (name === "pastHistoryOfDisease")
        setErrors({ ...errors, pastHistoryOfDisease: "هذا الحقل إجبارى" });
      if (name === "pastHistoryOfOperation")
        setErrors({ ...errors, pastHistoryOfOperation: "هذا الحقل إجبارى" });
    } else {
      const formErrors = { ...errors };
      delete formErrors[name];
      setErrors(formErrors);
    }
    if (name === "birthWeight") setFile({ ...file, birthWeight: value });
    if (name === "pastHistoryOfDisease")
      setFile({ ...file, pastHistoryOfDisease: value });
    if (name === "pastHistoryOfOperation")
      setFile({ ...file, pastHistoryOfOperation: value });
  };

  const headCircumferanceChangeHandler = (event) => {
    setFile({ ...file, headCircumferance: event.target.value.trim() });
  };
  const congenitalAnomaliesChangeHandler = (event) => {
    setFile({ ...file, congenitalAnomalies: event.target.value.trim() });
  };
  const radioOnChangeHandler = (event) => {
    setFile({ ...file, gender: event.target.value });
  };
  const notesChangeHandler = (event) => {
    setFile({ ...file, notes: event.target.value.trim() });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(file);
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
                  <TextInput
                    placeholder="الإسم الأول"
                    onChangeHandler={nameChangeHandler}
                    value={file.firstName}
                    name="firstName"
                  />
                  {errors.firstName && (
                    <span style={{ color: "red" }}>{errors.firstName}</span>
                  )}
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput
                    placeholder="الإسم الأوسط"
                    onChangeHandler={nameChangeHandler}
                    value={file.middleName}
                    name="middleName"
                  />
                  {errors.middleName && (
                    <span style={{ color: "red" }}>{errors.middleName}</span>
                  )}
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput
                    placeholder="الإسم الأخير"
                    onChangeHandler={nameChangeHandler}
                    value={file.lastName}
                    name="lastName"
                  />
                  {errors.lastName && (
                    <span style={{ color: "red" }}>{errors.lastName}</span>
                  )}
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput
                    placeholder="سبب دخول الحضانة"
                    onChangeHandler={causeOfNicuAdmissionChangeHandler}
                    value={file.causeOfNicuAdmission}
                    name="causeOfNicuAdmission"
                  />
                </div>
                <div className="col-4 my-1 px-1">
                  <TextInput
                    placeholder="مشاكل الولادة"
                    onChangeHandler={labourProblemsChangeHandler}
                    value={file.labourProblems}
                    name="labourProblems"
                  />
                </div>
                <div className="col-4 my-1 px-1">
                  <DateInput title="تاريخ الميلاد" name="mm" />
                </div>

                <div className="col-3 my-1 px-1">
                  <SelectInput name="gov" title="المحافظة" />
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
                <div className="col-3 my-1 px-1">
                  <TextInput
                    placeholder="الإيميل"
                    onChangeHandler={emailChangeHandler}
                    name="email"
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <div className="col-3 my-1 px-1">
                  <TextInput placeholder="كلمة المرور" />
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput
                    placeholder="وزن الولادة"
                    onChangeHandler={requiredOnlyInputChangeHandler}
                    value={file.birthWeight}
                    name="birthWeight"
                  />
                  {errors.birthWeight && (
                    <span style={{ color: "red" }}>{errors.birthWeight}</span>
                  )}
                </div>
                <div className="col-3 my-1 px-1">
                  <NumberInput
                    placeholder="محيط الرأس عند الولادة"
                    onChangeHandler={headCircumferanceChangeHandler}
                    value={file.headCircumferance}
                    name="headCircumferance"
                  />
                </div>
                <div className="col-3 my-1 px-1">
                  <TextInput
                    placeholder="العيوب الخلقية"
                    onChangeHandler={congenitalAnomaliesChangeHandler}
                    value={file.congenitalAnomalies}
                    name="congenitalAnomalies"
                  />
                </div>
                <div className="col-3 my-1 px-1">
                  <div className="row m-0">
                    <div className="col-6 p-0 pe-1">
                      <RadioInput
                        onChangeHandler={radioOnChangeHandler}
                        title="ذكر"
                        name="Gender"
                        value="male"
                        checked={file.gender === "male"}
                      />
                    </div>
                    <div className="col-6 p-0 ps-1">
                      <RadioInput
                        onChangeHandler={radioOnChangeHandler}
                        title="أنثى"
                        name="Gender"
                        value="female"
                        checked={file.gender === "female"}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-4 px-1">
                  <TextareaInput
                    placeholder="التاريخ المرضى"
                    onChangeHandler={requiredOnlyInputChangeHandler}
                    value={file.pastHistoryOfDisease}
                    name="pastHistoryOfDisease"
                  />
                  {errors.pastHistoryOfDisease && (
                    <span style={{ color: "red" }}>
                      {errors.pastHistoryOfDisease}
                    </span>
                  )}
                </div>
                <div className="col-4 px-0">
                  <TextareaInput
                    placeholder="التاريخ الجراحى"
                    onChangeHandler={requiredOnlyInputChangeHandler}
                    value={file.pastHistoryOfOperation}
                    name="pastHistoryOfOperation"
                    />
                  {errors.pastHistoryOfOperation && (
                    <span style={{ color: "red" }}>
                      {errors.pastHistoryOfOperation}
                    </span>
                  )}
                </div>
                <div className="col-4 px-1">
                  <TextareaInput 
                  placeholder="ملاحظات" 
                  onChangeHandler={notesChangeHandler}
                  value={file.notes}
                  name="notes" 
                  />
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
