import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/style.css";
import "./assets/demo/style-demo.css";
import cookie from "react-cookies";

if (cookie.load("dark") && cookie.load("dark") === "true") {
    import("./assets/styles/style-dark.css").then();
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
