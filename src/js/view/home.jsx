import React, { Component } from "react";
import Estructura from "../component/Estructura.jsx";
import Cable from "../component/Cable.jsx";
import Azizlight from "../component/Azizlight.jsx";

const Home = () => {
	return (
		<>
			<Azizlight />
			<Cable />
			<Estructura />
		</>
	);
};

export default Home;
