import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Reduxe/store.js";
import Additional from "./components/Additional.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />

    <Additional />
    <Footer />
  </Provider>
);
