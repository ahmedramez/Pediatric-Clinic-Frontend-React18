import styles from './button-withPressEffect.module.css'
const ButtonWithPressEffect = ({text ,buttonClickHandler}) => {
    return ( 
<div onClick={buttonClickHandler} className={`${styles.uploadLogoBtn}`}> {text??'BUTTON'} </div>
     );
}
 
export default ButtonWithPressEffect;