import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { StoreProvider } from "./store";
import Components from "./Components/";
import M from "materialize-css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App ">
      <Components />
    </div>
  );
}
let app = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);
export default app;
