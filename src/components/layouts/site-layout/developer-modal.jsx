import { Fragment, useState } from "react";
import developerImage from "../../../assets/developer.jpg";
import "./developer-modal.css";
const DeveloperModal = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const showPhoneNumberHandler = () => {
    setShowPhoneNumber(true);
    setShowEmail(false);
    setShowLinkedin(false);
  };
  const showEmailHandler = () => {
    setShowPhoneNumber(false);
    setShowEmail(true);
    setShowLinkedin(false);
  };
  const showLinkedinHandler = () => {
    setShowPhoneNumber(false);
    setShowEmail(false);
    setShowLinkedin(true);
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="developerModal"
        tabIndex="-1"
        aria-labelledby="developerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="card developer-profile-card-3">
                      <div className="background-block">
                        <img
                          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                          alt="developer background"
                          className="background"
                        />
                      </div>
                      <div className="developer-profile-thumb-block">
                        <img
                          src={developerImage}
                          alt="developerAvatar"
                          className="developer-profile"
                        />
                      </div>
                      <div className="card-content">
                        <h2>
                          Amr Amin<small>Developer</small>
                        </h2>
                        <div className="developer-icons-container">
                          <div onClick={showLinkedinHandler} className="developer-icon-linkedin d-inline-block rounded-circle mx-1">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 3333 3333"
                              fill="#0d6efd"
                            >
                              <path d="M1465 1354h322v165h5c45-81 155-165 318-165 340 0 403 212 403 488v561h-336v-498c0-119-2-271-175-271-175 0-202 129-202 263v506h-336V1354zM1667 0c460 0 877 187 1179 488 302 302 488 718 488 1179 0 460-187 877-488 1179-302 302-718 488-1179 488-460 0-877-187-1179-488C186 2544 0 2128 0 1667c0-460 187-877 488-1179C790 186 1206 0 1667 0zm1093 573c-280-280-666-453-1093-453S853 293 574 573c-280 280-453 666-453 1093s173 814 453 1093c280 280 666 453 1093 453s814-173 1093-453c280-280 453-666 453-1093s-173-814-453-1093zm-1528 490c0 97-78 175-175 175s-175-78-175-175 78-175 175-175 175 78 175 175zm-350 291h350v1049H882V1354z" />
                            </svg>
                          </div>
                          <div onClick={showEmailHandler} className="developer-icon-email d-inline-block rounded-circle mx-1">
                            <svg
                              width="32"
                              height="32"
                              fill="#cc324b"
                              x="0px"
                              y="0px"
                              viewBox="0 0 1000 1000"
                            >
                              <g>
                                <path d="M500,10C230.5,10,10,230.5,10,500c0,269.5,220.5,490,490,490c269.5,0,490-220.5,490-490C990,230.5,769.5,10,500,10z M500,949.2C252.9,949.2,50.8,747,50.8,500C50.8,253,252.9,50.8,500,50.8S949.2,253,949.2,500C949.2,747,747.1,949.2,500,949.2z" />
                                <path d="M731.4,295.8H268.6c-18.8,0-34,15-34,33.4v341.6c0,18.4,15.2,33.4,34,33.4h462.8c18.8,0,34-15,34-33.4V329.2C765.4,310.8,750.2,295.8,731.4,295.8z M684.1,336.7L500,512L315.9,336.7H684.1z M724.6,663.3H275.4V355.1l195.7,185.7l28.9,28.9l28.9-28.9l195.7-185.7V663.3z" />
                              </g>
                            </svg>
                          </div>
                          <div onClick={showPhoneNumberHandler} className="developer-icon-phone d-inline-block rounded-circle mx-1">
                            <svg
                              width="32"
                              height="32"
                              fill="#016269"
                              viewBox="0 0 58.282 58.282"
                            >
                              <g id="Layer_x0020_1">
                                <g id="_152222920">
                                  <path d="m24.186 22.5c-5.4466 3.1445 2.8637 18.724 8.8237 15.283 1.0584 1.8332 4.4676 7.7381 5.526 9.5712-2.5146 1.4519-4.6432 2.3671-7.5585 0.70054-8.0946-4.6273-17.005-20.054-16.751-29.256 0.088046-3.196 1.971-4.4482 4.434-5.8702 1.0584 1.8332 4.4676 7.738 5.526 9.5712z" />
                                  <path d="m26.47 22.24c-0.58849 0.33978-1.3458 0.13697-1.6856-0.45158l-5.2095-9.0232c-0.33984-0.58862-0.13704-1.3459 0.45152-1.6857l2.738-1.5808c0.58855-0.33984 1.346-0.13685 1.6858 0.4517l5.2095 9.0231c0.33978 0.58849 0.13691 1.3458-0.45158 1.6856l-2.738 1.5808z" />
                                  <path d="m40.702 46.89c-0.58849 0.33978-1.3458 0.13697-1.6856-0.45164l-5.2095-9.0232c-0.33984-0.58855-0.13704-1.3459 0.45152-1.6856l2.738-1.5808c0.58855-0.33978 1.346-0.13679 1.6858 0.4517l5.2095 9.0231c0.33978 0.58855 0.13691 1.3459-0.45158 1.6856l-2.738 1.5808z" />
                                </g>
                                <path d="m29.141-2.845e-15h0.0004319v0.006787c8.05 0.0001234 15.335 3.26 20.604 8.5296 5.2693 5.2693 8.5291 12.554 8.5293 20.604h0.006787v0.0013574h-0.006787c-0.0001234 8.05-3.26 15.335-8.5296 20.604-5.2694 5.2693-12.554 8.5291-20.604 8.5293v0.006787h-0.0013574v-0.006787c-8.05-0.0001234-15.335-3.26-20.604-8.5296-5.2693-5.2694-8.5291-12.554-8.5293-20.604h-0.006787v-0.0013574h0.006787c0.0001234-8.05 3.26-15.335 8.5296-20.604 5.2693-5.2693 12.554-8.5291 20.604-8.5293v-0.006787h0.0009255zm0.0004319 3.4758v0.006787h-0.0013574v-0.006787c-7.0792 0.0001851-13.494 2.8753-18.141 7.5226-4.6477 4.6476-7.5229 11.063-7.5229 18.142h0.006787v0.0013574h-0.006787c0.0001851 7.0792 2.8753 13.494 7.5226 18.141 4.6476 4.6477 11.063 7.5229 18.142 7.5229v-0.006787h0.0013574v0.006787c7.0792-0.0001851 13.494-2.8753 18.141-7.5226 4.6477-4.6476 7.5229-11.063 7.5229-18.142h-0.006787v-0.0013574h0.006787c-0.0001851-7.0792-2.8753-13.494-7.5226-18.141-4.6476-4.6477-11.063-7.5229-18.142-7.5229z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <p className="developer-information pt-1 m-0">
                          {showPhoneNumber && <span className="fw-bold" style={{color:'#016269'}}>01092723265</span>}
                          {showLinkedin && <a
                          className="text-decoration-none fw-bold" style={{color:'#0d6efd'}}
                          href="https://www.linkedin.com/in/amr-amin-ali/">زيارة الصفحة</a>}
                          {showEmail && <span className="fw-bold" style={{color:'#cc324b'}}>dev.amramin@gmail.com</span>}
                        </p>
                        <p className="text-content">
                           تمت البرمجة بأحدث التقنيات
                           <br/>
                           ASP.NET Core with React
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="modal-footer bg-dark" data-bs-dismiss="modal">
              <p
                className="fw-bold text-center text-white w-100"
                style={{ cursor: "pointer" }}
              >
                Ok
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DeveloperModal;
