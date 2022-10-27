import styles from "./radio-input.module.css";
const RadioInput = ({ title, name, value, onChangeHandler, checked=false, id = null }) => {
  return (
      <div className={styles.radio}>
        <input
        onChange={onChangeHandler}
          label= {title}
          type="radio"
          id={id || value}
          value={value}
          checked={checked}
          name={name}
        />
      </div>
  );
};
export default RadioInput;
