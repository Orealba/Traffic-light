//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Azizlight from "./component/Azizlight.jsx";
import Estructura from "./component/Estructura.jsx";
import Cable from "./component/Cable.jsx";
import Semaforo from "./component/Semaforo.jsx";

//import your own components
import Home from "./view/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
