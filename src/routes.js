import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <App /> },
    { path: "detalhes", element: <Detail /> },
  ]);
  return routes;
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
