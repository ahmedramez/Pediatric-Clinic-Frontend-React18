import styles from "./date-input.module.css";
const DateInput = ({ title, name, value, id = null }) => {
  return (
    <div className={styles.textInputContainer}>
      <input
        className={`form-control form-control-lg ${styles.dateInput}`}
        type="date"
        name={name}
        id={id || name}
        value={value}
      />
      <label className={styles.label} htmlFor={id || name}>
        {title}
      </label>
    </div>
  );
};
export default DateInput;
