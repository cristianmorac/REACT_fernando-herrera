import React from "react";
import ReactDOM  from "react-dom/client";
/* import { App } from "./HWApp"; */

import './style.css';
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Para pasar números se debe encerrar el valor en {}  */}
    <CounterApp value={1}/>
  </React.StrictMode>
);
