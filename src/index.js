import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppRouter from "./routes";
import { PeopleContextProvider } from "./contexts/PeopleContext";

ReactDOM.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </PeopleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
