import { Fragment, useEffect, useState } from "react";
import ButtonWithPressEffect from "../buttons/button-withPressEffect";
import SliderImageItem from "./slider-image-item";
import { httpPOSTFile } from "../../../http/httpPOSTFile";
import { httpPOST } from "../../../http/httpPOST";

const Slideshow = () => {
  const [showSaveImgBtn, setShowSaveImgBtn] = useState(false);
  const [buttonText, setButtonText] = useState("إضافة صورة");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imgInputChangeHandler = (event) => {
    setButtonText("تغيير الصورة");
    setShowSaveImgBtn(true);
    setSelectedImage(event.target.files[0]);
  };
  const saveImageButtonClickHandler = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedImage, selectedImage.name);

    // Details of the uploaded file
    // console.log(selectedImage);

    // Request made to the backend api
    // Send formData object
    const response = await httpPOSTFile(
      "https://localhost:7289/api/WebSiteManagement/UploadSliderImage",
      formData
    );
    const data = response;
    console.log(data);
    // setShowSaveImgBtn(false);
    // setButtonText("إضافة صورة");
  };
  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  const imgPlaceholder =
    "https://vitalehastanesi.com/wp-content/uploads/2020/12/cocuk-sagligi.jpg";
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
            )}{" "}
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
        <div className="col-3 p-1">
          <SliderImageItem imageId="1" imageUrl={imgPlaceholder} />
        </div>
      </div>
    </Fragment>
  );
};

export default Slideshow;
