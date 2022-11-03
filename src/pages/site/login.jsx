import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadindSpiner from "../../components/home-page/site-loading-spinner";
import { useStore } from "../../hooks-store/store";
import { httpPOST } from "../../http/httpPOST";
import styles from "./login.module.css";
import { validateEmail } from "../../utility/validate-email";
const Login = () => {
  const [state, dispatch] = useStore(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  //Validate email
  const emailChangeHandler = (event) => {
    const isValidEmail = validateEmail(event.target.value);
    if (!isValidEmail) {
      setErrors({ email: "أدخل بريد إلكترونى صحيح" });
    } else {
      setEmail(event.target.value);
      const formErrors = { ...errors };
      delete formErrors.email;
      setErrors(formErrors);
    }
  };

  //Validate Password
  const passwordChangeHandler = (event) => {
    const enteredPassword = event.target.value;

    //Password is empty, false, 0
    if (!enteredPassword) {
      setErrors({ ...errors, password: "من فضلك أدخل كلمة المرور" });
      return;
    }
    if (enteredPassword.length < 8) {
      setErrors({
        ...errors,
        password: "يجب ألا يقل طول كلمة المرور عن 8 أحرف",
      });
      return;
    }
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let hasLowerCaseChar = false;
    let hasUpperCaseChar = false;
    let hasNumber = false;
    if (enteredPassword.length >= 8) {
      for (const character of enteredPassword) {
        // is number
        if (!isNaN(character * 1)) {
          hasNumber = true;
        }
        if (isNaN(character * 1)) {
          //is UPPER CASE
          if (
            character === character.toUpperCase() &&
            character.toLowerCase() !== character
          ) {
            hasUpperCaseChar = true;
          }
          //is lower case
          if (character === character.toLowerCase()) {
            hasLowerCaseChar = true;
          }
        }
      }
      if (!format.test(enteredPassword)) {
        setErrors({
          ...errors,
          password: "يجب أن تحتوى كلمة المرور على أحرف خاصة",
        });
        return;
      }
      if (!hasUpperCaseChar) {
        setErrors({
          ...errors,
          password: "يجب أن تحتوى كلمة المرور على حرف كابيتال",
        });
        return;
      }
      if (!hasLowerCaseChar) {
        setErrors({
          ...errors,
          password: "يجب أن تحتوى كلمة المرور على حرف صغير",
        });
        return;
      }
      if (!hasNumber) {
        setErrors({
          ...errors,
          password: "يجب أن تحتوى كلمة المرور على أرقام",
        });
        return;
      }
    }

    const formErrors = { ...errors };
    delete formErrors.password;
    setErrors(formErrors);
    setPassword(enteredPassword);
  };

  //Submit
  const submitLoginFormHandler = async (event) => {
    event.preventDefault();
    if (errors && Object.keys(errors).length === 0 && email && password) {
      setIsLoading(true);
      const response = await httpPOST(
        localStorage.getItem('LOGIN_URL') ,
        {
          email,
          password,
          rememberMe: true,
        }
      );
      if (response.status === 200) {
        const result = await response.json();
        if (result.token && result.role) {
          dispatch("SET_LOGGED_IN", result);
        } else {
          alert("Failed logging to server");
        }
      } else {
        alert(`server response not ok: ${response.status}`);
      }
      setIsLoading(false);
    }
    return;
  };

  useEffect(() => {
    if (state.login.isLoggedIn && state.login.role === "Doctor") {
      navigate("/Dashboard");
    }
    if (
      state.login.isLoggedIn &&
      (state.login.role === "Secretary" || state.login.role === "Patient")
    ) {
      navigate("/");
    }
  }, [navigate, state.login.isLoggedIn, state.login.role]);
  return (
    <Fragment>
      {isLoading && <LoadindSpiner text="Loading..." />}
      {!state.login.isLoggedIn && !isLoading && (
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
              onChange={emailChangeHandler}
              type="email"
              placeholder="أدخل بريدك الإلكترونى"
              className={styles.inputBox}
            />
            {errors.email && (
              <span className={styles.invalid}>{errors.email}</span>
            )}
            <br />
            <br />
            <label htmlFor="Password">كلمة المرور</label>
            <br />
            <input
              onChange={passwordChangeHandler}
              type="Password"
              placeholder="أدخل كلمة المرور"
              className={styles.inputBox}
            />
            {errors.password && (
              <span className={styles.invalid}>{errors.password}</span>
            )}

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

//--Validate Email Function
