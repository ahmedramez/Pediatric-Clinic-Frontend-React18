import styles from "./textarea-input.module.css";
const TextareaInput = ({ placeholder, name, value, id = null }) => {
  return (
    <div className="form-floating">
      <textarea
        className={`form-control ${styles.textareaInputStyle}`}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
      ></textarea>
      <label className={styles.label}  htmlFor={name}>{placeholder}</label>
    </div>
  );
};
export default TextareaInput;
