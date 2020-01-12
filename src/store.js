import React, { useReducer } from "react";
const initialState = {
  name: "app name",
  short_name: "short name",
  theme_color: "#fff",
  background_color: "#fff",
  display: "browser",
  orientation: "portrait",
  scope: "/",
  start_url: "/"
};
const store = React.createContext(initialState);
const { Provider } = store;
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.field) {
      case "name":
        return { ...state, ...{ name: action.payload } };
      case "short_name":
        return { ...state, ...{ short_name: action.payload } };
      case "theme_color":
        return { ...state, ...{ theme_color: action.payload } };
      case "background_color":
        return { ...state, ...{ background_color: action.payload } };
      case "display":
        return { ...state, ...{ display: action.payload } };
      case "orientation":
        return { ...state, ...{ orientation: action.payload } };
      case "scope":
        return { ...state, ...{ scope: action.payload } };
      case "start_url":
        return { ...state, ...{ start_url: action.payload } };
      default:
        return 4;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StoreProvider };
