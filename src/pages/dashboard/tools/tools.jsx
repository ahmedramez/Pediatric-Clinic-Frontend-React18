import { Fragment } from "react";
import SearchToolsModal from "../../../components/dashboard/tools/search-tools-modal";
import CreateToolModal from "../../../components/dashboard/tools/create-tool-modal";
import LinkButton from "../../../components/dashboard/buttons/link-button";
import ShowModalButton from "../../../components/dashboard/buttons/show-modal-button";

const Tools = () => {
  document.title = "الأدوات";
  return (
    <Fragment>
      <div className="col-8">
        <div className="card text-center">
          <div className="card-header">الخيارات المتاحة</div>
          <div className="card-body">
            <h5 className="card-title mt-4">هذه الإجراءات خاصة بالأدوات</h5>
            <p className="card-text mb-4">
              يمكنك الإختيار ما بين تسجيل آداة جديدة أو تعديل بيانات آداة أو
              إستعراض الأدوات المسجلة أو حتى حذف آداة مسجلة
            </p>
            <hr />
            <div className="row mt-5 mb-5">
              <div className="col-4">
                <LinkButton to="/" title="عرض كل الأدوات" color="red"/>
              </div>
              <div className="col-4">
                <ShowModalButton
                color="blue"
                  modalId="#createNewFileModal"
                  title="تسجيل آداة"
                />
              </div>
              <div className="col-4">
                <ShowModalButton
                color="green"
                  modalId="#searchForPatientFileModal"
                  title="بحث عن آداة"
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            لا تنسى أن تحظى بيوم سعيد
          </div>
        </div>
        <CreateToolModal />
        <SearchToolsModal />
      </div>
    </Fragment>
  );
};
export default Tools;
