import { Link } from "react-router-dom";
import { useStore } from "../../hooks-store/store";
import styles from "./login.module.css";
const Login = () => {
  const [state, dispatch] = useStore();

  dispatch("login", {
    id:1
  });
  return (
    <div className={styles.box}>
      <div className="back-to-home">
        <Link to="/">
          <svg
            className="scale-up-center"
            width="32"
            height="32"
            fill="#727171"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </Link>
      </div>
      <form>
        <label htmlFor="Email">البريد الإلكترونى</label>
        <br />
        <input
          type="email"
          placeholder="أدخل بريدك الإلكترونى"
          className={styles.inputBox}
        />
        <br />
        <br />
        <label htmlFor="Password">كلمة المرور</label>
        <br />
        <input
          type="Password"
          placeholder="أدخل كلمة المرور"
          className={styles.inputBox}
        />
        <br />
        <div className={styles.forget}>
          <label className={styles.checkboxLabel}>
            <input htmlFor="RememberMe" type="checkbox" />
            <span className={styles.checkboxCustom}></span>
            <span className={styles.labelText}>تذكرنى</span>
          </label>
          <span className={styles.fg}>
            <a href="/">نسيت كلمة المرور؟</a>
          </span>
        </div>
        <button type="submit" className={styles.loginButton}>
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};
export default Login;
