import { Fragment } from "react";
import LinkButton from "../../../components/dashboard/buttons/link-button";
import ShowModalButton from "../../../components/dashboard/buttons/show-modal-button";
import CreatePurchasesModal from "../../../components/dashboard/purchases/create-purchase-modal";

const Purchases = () => {
  document.title = "المشتريات";
  return (
    <Fragment>
      <div className="col-8">
        <div className="card text-center">
          <div className="card-header">الخيارات المتاحة</div>
          <div className="card-body">
            <h5 className="card-title mt-4">هذه الإجراءات خاصة بالمشتريات</h5>
            <p className="card-text mb-4">
              يمكنك الإختيار ما بين تسجيل عملية شراء جديدة أو حتى تصفح كل
              مشترياتك
            </p>
            <hr />
            <div className="row mt-5 mb-5">
              <div className="col-4 offset-2">
                <LinkButton to="/" title="عرض كل المشتريات" color="red"/>
              </div>
              <div className="col-4">
                <ShowModalButton
                color="blue"
                  modalId="#createNewFileModal"
                  title="تسجيل مشتريات"
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            لا تنسى أن تحظى بيوم سعيد
          </div>
        </div>
        <CreatePurchasesModal />
      </div>
    </Fragment>
  );
};
export default Purchases;
