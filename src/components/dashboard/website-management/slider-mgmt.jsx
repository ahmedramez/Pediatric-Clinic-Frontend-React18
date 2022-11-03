import { Fragment, useEffect, useState } from "react";
import ButtonWithPressEffect from "../buttons/button-withPressEffect";
import SliderImageItem from "./slider-image-item";
import { httpPOSTFile } from "../../../http/httpPOSTFile";
import { useStore } from "../../../hooks-store/store";
import { httpGET } from "../../../http/httpGET";

const SliderManagement = () => {
  const [state, dispatch] = useStore();

  const [showSaveImgBtn, setShowSaveImgBtn] = useState();
  const [buttonText, setButtonText] = useState("إضافة صورة");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imgInputChangeHandler = (event) => {
    if (event.target.files[0]) {
      setButtonText("تغيير الصورة");
      setShowSaveImgBtn(true);
      setSelectedImage(event.target.files[0]);
    }
  };
  const saveImageButtonClickHandler = async () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("myFile", selectedImage, selectedImage.name);
    //const response =
    await httpPOSTFile(
      localStorage.getItem("UPLOIAD_SLIDER_IMG_URL"),
      formData
    );
    httpGET(localStorage.getItem("GET_ALL_SLIDER_IMGS_URL")).then((result) =>
    dispatch("INITIATE_SLIDER_IMAGES", result)
  );
    setShowSaveImgBtn(false);
    setButtonText("إضافة صورة");
    setImageUrl(null);
  };
  let isSliderImagesInitiated = false;
  useEffect(() => {
    if (state.sliderImages.images.length < 1 && isSliderImagesInitiated === false) {
      httpGET(localStorage.getItem("GET_ALL_SLIDER_IMGS_URL")).then((result) =>
        dispatch("INITIATE_SLIDER_IMAGES", result)
      );
    }
    isSliderImagesInitiated=true;
  }, []);
  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  return (
    <Fragment>
      <div className="row p-5">
        <div className="col-6">
          <div>
            <div className="my-3">
              <label htmlFor="uploadSliderImage">
                <ButtonWithPressEffect text={buttonText} />
              </label>
              <input
                onChange={imgInputChangeHandler}
                required
                type="file"
                name="clinicLogo"
                id="uploadSliderImage"
                hidden
              />
            </div>
            {showSaveImgBtn && (
              <div className="my-3">
                <ButtonWithPressEffect
                  text="حفظ الصورة"
                  buttonClickHandler={saveImageButtonClickHandler}
                />
              </div>
            )}
          </div>
        </div>
        <div className="col-6 text-end">
          {imageUrl && selectedImage && (
            <img
              src={imageUrl}
              style={{ width: "200px", height: "200px" }}
              alt="clinicLogoPreview"
            />
          )}
        </div>
      </div>
      <div className="row m-0">
        {state.sliderImages.images.length === 0 && (
          <h1 className="text-danger">لم تقم بإضافة أى صور حتى الآن</h1>
        )}

        {state.sliderImages.images.length > 0 &&
          state.sliderImages.images.map((c) => {
            return (
              <div key={c.id + 1} className="col-3 p-1">
                <SliderImageItem
                  itemKey={c.id}
                  imageId={c.id}
                  imageUrl={
                    localStorage.getItem("SHOW_SLIDER_IMG_URL") + c.imageUrl
                  }
                />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default SliderManagement;
