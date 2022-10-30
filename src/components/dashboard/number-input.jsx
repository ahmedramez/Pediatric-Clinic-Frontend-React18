import styles from "./number-input.module.css";
const NumberInput = ({ step, placeholder,onChangeHandler=null, name, value, id = null }) => {
  return (
    <div className="form-floating">
      <input
      onChange={onChangeHandler}
        step={step || 1}
        type="number"
        className={`form-control form-control-lg ${styles.numberInputStyle}`}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      <label className={styles.label} htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
};
export default NumberInput;
