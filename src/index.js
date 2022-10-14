import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  // HashRouter is used here because the URl doesn't work when refreshing and it is done by writing url manually
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  
  document.getElementById("root")
);
