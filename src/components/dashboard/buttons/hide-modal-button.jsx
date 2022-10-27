import styles from "./hide-modal-button.module.css";
//red green blue yellow
const HideModalButton = ({ width, title, color }) => {
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
      data-bs-dismiss="modal"
      className={`${styles.showModalButton} ${buttonColor}`}
    >
      {title}
    </button>
  );
};
export default HideModalButton;
