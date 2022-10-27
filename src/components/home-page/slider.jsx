import { Fragment } from "react";

const Slider = () => {
  return (
    <Fragment>
      {<div
          id="main-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators" id="services">
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="0"
              aria-current="true"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#main-carousel"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://vitalehastanesi.com/wp-content/uploads/2020/12/cocuk-sagligi.jpg"
                className="d-block w-100 home-carousel-image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shashwathospitalaundh.in/wp-content/uploads/2021/09/Pediatrics.png"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://kiddipedia.com.au/wp-content/uploads/2019/05/Depositphotos_35211199_s-2019.jpg"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#main-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      }
    </Fragment>
  );
};
export default Slider;
