import React from "react";
import './index.css'
import PropTypes from "prop-types";

const CardType = (props) => {
    const { src,
    title,
    text,
    endtext } = props;
    return (
        <div className="card">
            <img
            style={{width: 66, height: 58}} 
            alt="" src={src}/>
            <h3>{title}</h3>
            <p>{text}</p>
            <p1>{endtext}</p1>
            <button>More info</button>
        </div>
    )
}

CardType.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    endtext: PropTypes.string.isRequired,
}

export default CardType;