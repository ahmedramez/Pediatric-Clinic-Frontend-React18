import { Fragment } from "react";
import CreateFileModal from "../../../components/dashboard/files/create-file-modal";
import SearchFiles from "../../../components/dashboard/files/search-files-modal";
import LinkButton from "../../../components/dashboard/buttons/link-button";
import ShowModalButton from "../../../components/dashboard/buttons/show-modal-button";

const Files = () => {
  document.title = "الملفات";
  return (
    <Fragment>
      <div className="col-8">
        <div className="card text-center">
          <div className="card-header">الخيارات المتاحة</div>
          <div className="card-body">
            <h5 className="card-title mt-4">
              هذه الإجراءات خاصة بملفات المرضى
            </h5>
            <p className="card-text mb-4">
              يمكنك الإختيار ما بين إنشاء ملف جديد لحالة جديدة أو فتح ملف تم
              إنشائه من قبل أو حتى عرض جميع الملفات المسجلة مسبقا
            </p>
            <hr />
            <div className="row mt-5 mb-5">
              <div className="col-4">
                <LinkButton to="View-All" title="عرض كل الموجودة" color="red" />
              </div>
              <div className="col-4">
                <ShowModalButton
                color="blue"
                modalId="#createNewFileModal"
                title="إنشاء ملف جديد"
                />
              </div>
              <div className="col-4">
                <ShowModalButton
                color="green"
                  modalId="#searchForPatientFileModal"
                  title="بحث عن ملف"
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            لا تنسى أن تحظى بيوم سعيد
          </div>
        </div>
        <CreateFileModal />
        <SearchFiles />
      </div>
    </Fragment>
  );
};
export default Files;
