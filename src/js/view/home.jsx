import React, { Component } from "react";
import Azizlight from "../component/Azizlight.jsx";
import Estructura from "../component/Estructura.jsx";
import Cable from "../component/Cable.jsx";
import Semaforo from "../component/Semaforo.jsx";

const Home = () => {
	return (
		<>
			<Cable />
			<Estructura />
			<Azizlight />
			<Semaforo />
		</>
	);
};

export default Home;
