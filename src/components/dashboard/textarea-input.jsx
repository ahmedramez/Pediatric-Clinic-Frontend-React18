import styles from "./textarea-input.module.css";
const TextareaInput = ({
  placeholder,
  onChangeHandler = null,
  name,
  value,
  id = null,
}) => {
  return (
    <div className="form-floating">
      <textarea
        onChange={onChangeHandler}
        className={`form-control ${styles.textareaInputStyle}`}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
      ></textarea>
      <label className={styles.label} htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
};
export default TextareaInput;
