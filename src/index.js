import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
// import { PersistGate  } from "redux-persist/integration/react";
// import {store, persistor} from "./redux/store.jsx";
import store from "./redux/store.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
