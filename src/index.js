import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import Main from "./main";
import { unregister } from "./registerServiceWorker";

ReactDOM.render(<Main />, document.getElementById("main-root"));
unregister();
