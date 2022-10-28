import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadindSpiner from "../../components/home-page/site-loading-spinner";
import { useStore } from "../../hooks-store/store";
import { httpPOST } from "../../http/httpPOST";
import styles from "./login.module.css";
const Login = () => {
  const [state, dispatch] = useStore(true);
  const [IsLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const submitLoginFormHandler = async (event) => {
    event.preventDefault();
    //start form validation
    //-----
    //end form validation
    setIsLoading(true);
    const response = await httpPOST(
      "https://localhost:7289/api/Accounts/Login",
      {
        email: "admin@mail.com",
        password: "Admin@123",
        rememberMe: true,
      }
    );
    if (response.status === 200) {
      const result = await response.json();
      dispatch("SET_LOGGED_IN", result);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (state.login.isLoggedIn) {
      if (state.login.role === "Doctor") {
        // console.log("Doctor logged in");
        navigate("/Dashboard");
      }
      if (state.login.role !== "Doctor") {
        // console.log("Patient logged in");
        navigate("/");
      }
    }
  }, [navigate, state.login.isLoggedIn, state.login.role]);
  return (
    <Fragment>
      {IsLoading && <LoadindSpiner text="Loading..." />}
      {!state.login.isLoggedIn && !IsLoading && (
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
          <form onSubmit={submitLoginFormHandler}>
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
      )}
    </Fragment>
  );
};
export default Login;
