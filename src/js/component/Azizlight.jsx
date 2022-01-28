import React, { useState } from "react";
import "../../styles/Azizlight.css";
import * as PropTypes from "prop-types";

const Light = (props) => {
	return (
		<div
			className={`${props.color} ${props.className}`}
			onClick={props.handleClick}></div>
	);
};

Light.propTypes = {
	className: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

const Azizlight = () => {
	const [colors, setColors] = useState({
		red: "",
		yellow: "",
		green: "",
	});

	return (
		<>
			<Light
				className="Azizlight1"
				color={colors.red}
				handleClick={() => {
					setColors({ red: "encendidored" });
				}}
			/>
			<Light
				className="Azizlight1"
				color={colors.yellow}
				handleClick={() => {
					setColors({ yellow: "encendidoyellow" });
				}}
			/>
			<Light
				className="Azizlight1"
				color={colors.green}
				handleClick={() => {
					setColors({ green: "encendidogreen" });
				}}
			/>
		</>
	);
};

export default Azizlight;
