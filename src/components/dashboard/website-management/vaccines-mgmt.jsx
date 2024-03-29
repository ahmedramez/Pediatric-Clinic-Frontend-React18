import { Fragment } from "react";
import LinkButton from "../buttons/link-button";
import ShowModalButton from "../buttons/show-modal-button";
import CreateVaccineModal from "../vaccines/create-vaccine-modal";
import SearchVaccinesModal from "../vaccines/search-vaccines-modal";

const VaccinesMgmt = () => {
    return (
        <Fragment>
          
            <div className="card text-center">
              <div className="card-header">الخيارات المتاحة</div>
              <div className="card-body">
                <h5 className="card-title mt-4">هذه الإجراءات خاصة باللقاحات</h5>
                <p className="card-text mb-4">
                  يمكنك الإختيار ما بين تسجيل لقاح جديد أو تصفح اللقاحات المسجلة أو
                  البحث عن لقاح مسجل بالإسم أو حتى حذف لقاح مسجل.
                </p>
                <hr />
                <div className="row mt-5 mb-5">
                  <div className="col-4">
                    <LinkButton to="/" title="عرض كل اللقاحات" color="red"/>
                  </div>
                  <div className="col-4">
                    <ShowModalButton
                    color="blue"
                      modalId="#createNewFileModal"
                      title="تسجيل لقاح"
                    />
                  </div>
                  <div className="col-4">
                    <ShowModalButton
                    color="green"
                      modalId="#searchForPatientFileModal"
                      title="بحث عن لقاح"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                لا تنسى أن تحظى بيوم سعيد
              </div>
            </div>
            <CreateVaccineModal />
            <SearchVaccinesModal />
          
        </Fragment>
      );}
 
export default VaccinesMgmt;