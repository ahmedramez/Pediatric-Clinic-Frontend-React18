import { Fragment, useEffect } from "react";
import { useStore } from "../../hooks-store/store";
import { httpGET } from "../../http/httpGET";

const Slider = () => {
  const [state, dispatch] = useStore(false);

  let isSliderImagesInitiated = false;
  useEffect(() => {
    if (
      state.sliderImages.images.length < 1 &&
      isSliderImagesInitiated === false
    ) {
      httpGET(localStorage.getItem("GET_ALL_SLIDER_IMGS_URL")).then((result) =>
        dispatch("INITIATE_SLIDER_IMAGES", result)
      );
    }
    isSliderImagesInitiated = true;
  }, []);

  let buttonsCounter = 0;
  let carouseItemsCounter = 0;
  // console.log(state.sliderImages.images.length);
  return (
    <Fragment>
      {state.sliderImages.images.length >
        0 &&(
          <div
            id="main-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators" id="services">
              {state.sliderImages.images.map((c) => (
                <button
                  key={buttonsCounter}
                  type="button"
                  data-bs-target="#main-carousel"
                  data-bs-slide-to={`${buttonsCounter}`}
                  aria-current="true"
                  className={buttonsCounter++ === 0 ? `active` : null}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {state.sliderImages.images.map((img) => (
                <div
                  key={img.id}
                  className={
                    carouseItemsCounter++ === 0
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                  <img
                    src={`${
                      localStorage.getItem("SHOW_SLIDER_IMG_URL") + img.imageUrl
                    }`}
                    className="d-block w-100 home-carousel-image"
                    alt="..."
                  />
                </div>
              ))}
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
        )}
    </Fragment>
  );
};
export default Slider;
