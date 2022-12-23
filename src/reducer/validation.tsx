const initialData = {
  userData: {
    Firstname: localStorage.getItem("Firstname")
      ? localStorage.getItem("Firstname")
      : "",
    Date: "",
    Email: localStorage.getItem("Email") ? localStorage.getItem("Email") : "",
    password: localStorage.getItem("password")
      ? localStorage.getItem("password")
      : "",
  },
};
const validationReducer = (
  state = initialData,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default validationReducer;
