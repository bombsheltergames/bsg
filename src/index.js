import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import Routes from "./Routes";
import { unregister } from "./registerServiceWorker";

ReactDOM.render(<Routes />, document.getElementById("main-root"));
unregister();
