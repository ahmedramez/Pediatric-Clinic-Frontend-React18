import { Fragment } from "react";
import prescriptionSymbol from "../../../assets/prescriptionSymbol.png";
const PrescriptionTreatmentRecord = () => {
  return (
    <Fragment>
      <div className="treatment text-end">
        <span
          data-bs-toggle="modal"
          data-bs-target="#deleteConfirmationModal-4"
          className="d-block text-decoration-none text-black fw-bold"
        >
          cefaxone
          <img width="30" className="d-inline-block" src={prescriptionSymbol} alt="z" />
        </span>
        <p className="m-0 ps-5">4rf3wef</p>
      </div>
      {/* <!-- Delete Treatment Modal --> */}
      <div>
        <div
          className="modal fade bg-blue-dark"
          id="deleteConfirmationModal-4"
          tabIndex="-1"
          aria-labelledby="openExistingFileModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <form
                action="/Doctor/Treatments/Delete/4?patientFileId=1"
                method="post"
              >
                <div className="row rounded bg-blue-light" dir="rtl">
                  <h4 className="text-center text-white p-0 bg-gradient rounded-top py-2 position-relative">
                    cefaxone
                    <button
                      className="btn p-0 border-0 text-white position-absolute p-0"
                      style={{ left: "0%", top: "-15%" }}
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      <svg
                        fill="#f00"
                        width="64"
                        height="64"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                      </svg>
                    </button>
                  </h4>
                  <hr className="text-blue-dark opacity-100" />
                  <div className="row" dir="ltr">
                    <p className="col-3 text-warning fw-bold">Age of use:</p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">
                      Hyper sensitivity:
                    </p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">Dose:</p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">Indications:</p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">Side effects:</p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">
                      Drug interactions:
                    </p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">
                      Active ingredients:
                    </p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">
                      Contra indications:
                    </p>
                    <p className="col-9 text-white fw-bold"></p>
                    <p className="col-3 text-warning fw-bold">Precautions:</p>
                    <p className="col-9 text-white fw-bold"></p>
                  </div>
                  {/* <!-- Modal Buttons --------------------------------------------------------------> */}
                  <hr className="text-blue-dark opacity-100" />
                  <div className="row pb-3 m-0 d-flex flex-row justify-content-center">
                    <button
                      className="mx-1 fs-1 text-white green-button"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      لا
                    </button>
                    <button
                      className="mx-1 fs-2 text-white red-button"
                      type="submit"
                    >
                      حذف
                    </button>
                  </div>
                  {/* <!-- Modal Buttons --------------------------------------------------------------> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Delete Treatment Modal --> */}
    </Fragment>
  );
};
export default PrescriptionTreatmentRecord;
