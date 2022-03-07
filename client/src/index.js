import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./assets/context/appContext";
import "normalize.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById("root")
)