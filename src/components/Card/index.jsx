import React from "react";
import './style.css';

function Card(props) {
    // creating custom className variable to pass this particular prop to the Card component in the pages
    const classes = `description-card text-content ${props.className || ''}`;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;