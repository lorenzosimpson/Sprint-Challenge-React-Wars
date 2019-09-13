import React from 'react';

const Card = props => {
return (
    <div>
        <h2>{props.name}</h2>
        <h5>{props.gender}</h5>
        <h6>Mass: {props.mass}</h6>
    </div>
)
}

export default Card;