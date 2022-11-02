import styles from './button-glowOnHover.module.css'
const ButtonGlowOnHover = ({text='BUTTON',buttonClickHandler=null}) => {
  return (
    <button className={`${styles.glowOnHover}`} onClick={buttonClickHandler}>
       {text} 
    </button>
  );
};
export default ButtonGlowOnHover;
