import styles from "./reset-button.module.css";
const ResetButton = ({ width, title }) => {
  return (
    <button
      style={width && { width: width }}
      type="reset"
      className={styles.resetButton}
    >
      {title}
    </button>
  );
};
export default ResetButton;
