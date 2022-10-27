import styles from "./text-input.module.css";
const TextInput = ({ required=false,placeholder, name, value, id=null }) => {
  return (
    <div className="form-floating">
      <input
        type="text"
        className={`form-control form-control-lg ${styles.textInputStyle}`}
        id={id || name}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
      />
      <label className={styles.label} htmlFor={name}>{placeholder}</label>
    </div>
  );
};

export default TextInput;
