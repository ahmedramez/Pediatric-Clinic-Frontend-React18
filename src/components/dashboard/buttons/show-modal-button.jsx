import styles from "./show-modal-button.module.css";
//red green blue yellow
const ShowModalButton = ({ width, clickHandler, modalId, title, color }) => {
  let buttonColor;
  switch (color) {
    case "red":
      buttonColor = styles.red;
      break;
    case "green":
      buttonColor = styles.green;
      break;
    case "yellow":
      buttonColor = styles.yellow;
      break;
    case "blue":
      buttonColor = styles.blue;
      break;
    case "twitter":
      buttonColor = styles.twitter;
      break;

    default:
      buttonColor = styles.twitter;
      break;
  }
  return (
    <button
      style={width && { width: width }}
      onClick={clickHandler}
      className={`${styles.showModalButton} ${buttonColor}`}
      data-bs-toggle="modal"
      data-bs-target={modalId}
    >
      {title}
    </button>
  );
};
export default ShowModalButton;
