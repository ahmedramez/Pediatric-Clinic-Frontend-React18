import { useStore } from "../../../hooks-store/store";
import styles from "./slider-image-item.module.css";
import { httpDELETE } from "../../../http/httpDELETE";
const SliderImageItem = ({ imageUrl, imageId = 0, itemKey }) => {
  const dispatch = useStore()[1];
  const deleteImage = async (imageId) => {
    const response = await httpDELETE(
      localStorage.getItem('DELETE_IMG_URL') + imageId
    );
    if (response.status===400) {
      const data=await response.json();
      alert(data.SliderImage[0])
      return;
    }
    dispatch("DELETE_IMAGE", imageId);
  };

  return (
    <div key={itemKey} className={styles.container}>
      <img src={imageUrl} alt="" />
      <span
        className={styles.deleteButton}
        onClick={() => deleteImage(imageId)}
      >
        <svg viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </span>
    </div>
  );
};
export default SliderImageItem;
