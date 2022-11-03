import { initStore } from "./store";

localStorage.setItem('LOGIN_URL',localStorage.getItem('BASE_URL')+'/Accounts/Login')

const configureAccountsStore = () => {
  const actions = {
    SET_LOGGED_IN: (globalState, loginResule = {}) => {
        globalState.login.token = loginResule.token;
        globalState.login.firstName = loginResule.firstName;
        globalState.login.middleName = loginResule.middleName;
        globalState.login.lastName = loginResule.lastName;
        globalState.login.role = loginResule.role;
        globalState.login.isLoggedIn=true
        localStorage.setItem("token", `Bearer ${loginResule.token}`);
        localStorage.setItem("role", loginResule.role);
        return globalState;
    },
    LOGOUT:(globalState)=>{
      globalState.login.token = null;
      globalState.login.firstName = null;
      globalState.login.middleName = null;
      globalState.login.lastName = null;
      globalState.login.role = null;
      globalState.login.isLoggedIn=false;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return globalState;
    }
  };

  initStore(actions, {
    login: {
      email: null,
      firstName: null,
      middleName: null,
      lastName: null,
      role: localStorage.getItem("role"),
      token: localStorage.getItem("token"),
      isLoggedIn:localStorage.getItem("token")!==null
    },
  });
};

export default configureAccountsStore;
