const BookRoleModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centeredz modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              إحجز دورك الآن
            </h5>
          </div>
          <form className="m-auto">
            <div className="modal-body">
              <input
                name="Name"
                className="form-control form-control-lg mt-2"
                type="text"
                placeholder="الإسم"
                required
              />
              <input
                name="Address"
                className="form-control form-control-lg mt-2"
                type="text"
                placeholder="موبايل"
                required
              />
              <input
                name="Phone"
                className="form-control form-control-lg mt-2"
                type="text"
                placeholder="العنوان"
                required
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-bs-dismiss="modal"
              >
                إلغاء
              </button>
              <button type="submit" className="btn btn-success text-white">
                تأكيد
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookRoleModal;
