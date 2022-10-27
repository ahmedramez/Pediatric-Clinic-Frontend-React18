import { initStore } from "./store";
//"https://localhost:7289/api/Login"
const configureUsersStore = () => {
  const actions = {
    login: async (currentState, payload = {}) => {
      const response = await httpPOST(
        "https://localhost:7289/api/Login",
        payload
      );
      return response;
    },
  };

  initStore(actions, { isLoggedIn: false, role: null, email: null });
};

export default configureUsersStore;
