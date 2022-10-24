import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
// styling
import "./styling/root.css";
import "./styling/navbar.css";
import "./styling/slider.css";
import "./styling/categories.css";
import "./styling/singleproduct.css";
import "./styling/products.css";
import "./styling/uploadphoto.css";
import "./styling/footer.css";
import "./styling/cart.css";
import "./styling/favorite.css";
// styling

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
