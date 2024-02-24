import React from "react";
import './Button.css';
import showMediaIcons from './Navbar';
const Button = () => {
    return (
        <>
        <div className={showMediaIcons ?"button-one  button-one-top":"button-one"}>
        <button>Start free trail</button> 
        </div>
        </>
    );
};

export default Button;