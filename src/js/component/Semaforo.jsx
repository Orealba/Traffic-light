import React, { useState } from "react";
import "../../styles/Semaforo.css";
import "../component/Azizlight.jsx";

const Light = (props) => {
    return (
        <div className={`${props.color} ${props.className}`} onClick={props.handleClick}>...</div>
    );
}

Light.propTypes = {
    className: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

const Semaphore = () => {

    const [colors, setColors] = useState({
        red: '',
        yellow: '',
        green: ''
    });

    return (
        <>
            <Light className={color.red} handleClick={() => {
                setColors({red: 'encendido'})
            }} />
            <Light className={color.yellow} handleClick={() => {
                setColors({yellow: 'encendido'})
            }} />
            <Light className={color.green} handleClick={() => {
                setColors({green: 'encendido'})
            }} />
        </>
    );
};