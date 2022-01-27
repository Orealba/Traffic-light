import React, { useState } from "react";
import "../../styles/Azizlight.css";

const Estructura = () => {
	return <div className="fondo"></div>;
};
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
		<div>
			<ul className="Aziz-light">
				{lights.map((isActive, index) => (
					<li
						key={index}
						onClick={() => setActiveLight(isActive, index)}>
						<span className={isActive ? "on" : "off"} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Azizlight;
