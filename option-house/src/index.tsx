import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavigationBar } from "./components/ui/navigationbar.component";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <NavigationBar />
  </React.StrictMode>
);
