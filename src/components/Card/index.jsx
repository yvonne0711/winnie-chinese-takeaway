import React from "react";
import './style.css';

function Card(props) {
    return (
        <div className="card"
        style={{backgroundColor: "red"}}>
            {props.children}
        </div>
    );
}

export default Card;