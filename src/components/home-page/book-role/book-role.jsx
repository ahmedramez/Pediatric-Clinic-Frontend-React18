import { Fragment } from 'react';
import BookRoleModal from './book-role-modal';
const BookRole = () => {
  return (
    <Fragment>
      <div id='book-role' className="appointment mt-5">
      <div className="layy py-5 px-2 text-white">
        <div className="container">
          <div className="title-another text-center row">
            <h4 className="fs-1">عيادة متخصصه</h4>
            <h2 style={{fontSize: "52px"}}>دكتورة خبيرة و مؤهله</h2>
            <h3 className="fs-1m">لتوقيع كشف إحترافى</h3>
            <div className="btn-ro text-center mt-5">
              <button
                id="blog"
                className="btn px-5 bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span className="appointment-btn-text fw-bold fs-1">
                  <svg
                    style={{width: "27px",height: "27px",fontWeight: "bold"}}
                    className="bi bi-calendar-plus appointment-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                  حجـز دور
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BookRoleModal/>
    </Fragment>
    
  );
};
export default BookRole;
