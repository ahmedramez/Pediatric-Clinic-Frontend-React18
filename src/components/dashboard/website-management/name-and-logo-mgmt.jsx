import styles from "./name-and-logo-mgmt.module.css";
import TextInput from "../text-input";
import { useEffect, useState } from "react";
import ButtonGlowOnHover from "../buttons/button-glowOnHover";
const NameAndLogoMgmt = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  return (
      <form>
        <TextInput
          name="clinicName"
          placeholder="إسم العيادة"
          required={true}
        />
        <div className="row">
          <div className="col-6">
            <label htmlFor="clinicLogoFileInput">
              <div className={`${styles.uploadLogoBtn}`}>تغيير اللوجو</div>
              <input
                onChange={(e) => setSelectedImage(e.target.files[0])}
                required
                type="file"
                name="clinicLogo"
                id="clinicLogoFileInput"
                hidden
              />
            </label>
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
          <div className="col-12 my-3">
            <ButtonGlowOnHover text="حفظ"/>
          </div>
        </div>
      </form>
  );
};

export default NameAndLogoMgmt;
