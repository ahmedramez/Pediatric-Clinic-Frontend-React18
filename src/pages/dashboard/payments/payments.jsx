import { Fragment } from "react";
import CreatePaymentModal from "../../../components/dashboard/payments/create-payment-modal";
import SearchPaymentsModal from "../../../components/dashboard/payments/search-payments-modal";
import LinkButton from "../../../components/dashboard/buttons/link-button";
import ShowModalButton from "../../../components/dashboard/buttons/show-modal-button";


const Payments = () => {
  document.title = "المدفوعات";
  return (
    <Fragment>
      <div className="col-8">
        <div className="card text-center">
          <div className="card-header">الخيارات المتاحة</div>
          <div className="card-body">
            <h5 className="card-title mt-4">
              هذه الإجراءات خاصة بمدفوعات العيادة
            </h5>
            <p className="card-text mb-4">
              يمكنك الإختيار ما بين تسجيل ما تم دفعه أو تعديل قيمة تم دفعها
              مسبقا أو عرض مدفوعات شهر محدد أو عرض جميع المدفوعات أو حتى حذفها.
            </p>
            <hr />
            <div className="row mt-5 mb-5">
              <div className="col-4">
                <LinkButton to="/" title="عرض كل المدفوعات" color="red"/>
              </div>
              <div className="col-4">
                <ShowModalButton
                color="blue"
                  modalId="#createNewFileModal"
                  title="تسجيل مدفوعات"
                />
              </div>
              <div className="col-4">
                <ShowModalButton
                color="green"
                  modalId="#searchForPatientFileModal"
                  title="بحث"
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            لا تنسى أن تحظى بيوم سعيد
          </div>
        </div>
        <CreatePaymentModal />
        <SearchPaymentsModal />
      </div>
    </Fragment>
  );
};
export default Payments;
