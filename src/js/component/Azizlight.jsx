import React, { useState } from "react";
import "../../styles/Azizlight.css";

const Azizlight = () => {
	return (
		<>
			<div className="Aziz-light1"></div>
			<div className="Aziz-light2"></div>
			<div className="Aziz-light3"></div>
		</>
	);
};

/*
function Azizlight() {
	const [lights, setLights] = useState([false, false, false]);

	function setActiveLight(isActive, index) {
		if (isActive) {
			lights[index] = false;
			setLights([...lights]);
		} else if (lights.every((active) => !active)) {
			lights[index] = true;
			setLights([...lights]);
		}
	}

	return (
		<div className="Aziz-light">
				{lights.map((isActive, index) => (
				
						key={index}
						onClick={() => setActiveLight(isActive, index)}>
						<span className={isActive ? "on" : "off"} />
					
				))}
			
		</div>
	);
}
*/
export default Azizlight;
