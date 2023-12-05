import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./config/route";

const App: React.FunctionComponent<unknown> = () : JSX.Element => {
  return (
    // taking care of different routes
    <AppRoute />
  );
};

export default App;
