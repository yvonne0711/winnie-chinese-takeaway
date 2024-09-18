import React from "react";
import './style.css';

// for when we are currently closed 

function Alert(props){
    return (
        <div className="update-alert" role="alert">
            {props.message}
        </div>
    )
}

export default Alert;