import React, { Component } from "react";
import Azizlight from "../component/Azizlight.jsx";
import Estructura from "../component/Estructura.jsx";
import Cable from "../component/Cable.jsx";

const Home = () => {
	return (
		<>
			<Cable />
			<Estructura />
			<Azizlight />
		</>
	);
};

export default Home;
