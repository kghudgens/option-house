import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavigationBar } from "./components/ui/index";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div>
      <NavigationBar />
    </div>
  </React.StrictMode>
);
