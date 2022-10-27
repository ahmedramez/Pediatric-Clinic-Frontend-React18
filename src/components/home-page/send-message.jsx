const SendMessage = () => {
  return (
    <div>
      <div className="container col-lg-6" id="contact-us">
        <h1 className="main-title text-center">أرسل رسالة</h1>
        <form id="contactForm">
          <div className="mb-3">
            <input
              className="form-control form-control-lg mt-2"
              type="text"
              placeholder="إسمك"
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control form-control-lg mt-2"
              type="text"
              placeholder="رقم الموبايل للتواصل"
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control form-control-lg mt-2"
              type="text"
              placeholder="عنوانك"
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-control-lg mt-2"
              id="message"
              type="text"
              placeholder="رسالتك..."
              style={{height: "10rem"}}
              data-sb-validations="required"
            ></textarea>
          </div>
          <div className="d-grid mb-3">
            <button className="btn send-message fw-bold btn-lg" type="submit">
              أرسل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendMessage;
