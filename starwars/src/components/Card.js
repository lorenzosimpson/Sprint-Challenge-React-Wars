import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    height: 200px;
    width: 400px;
    padding: 3%;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 0px 20px grey;
    &:hover {
        background: grey;
        color: white;
    }

`

  const CardStrap = props => {
    return (
      <StyledCard >
          <div>
            <h1>{props.name}</h1>
            <p>{props.gender}</p>
            <p>Mass: {props.mass}</p>
            {/* <CardText>
              <small className="text-muted">
                Release date: {props.release_date}
              </small>
            </CardText> */}
          </div>
      </StyledCard>
    );
  };

export default CardStrap;

// import React from 'react';

// const Card = props => {
// return (
//     <div>
//         <h2>{props.name}</h2>
//         <h5>{props.gender}</h5>
//         <h6>Mass: {props.mass}</h6>
//     </div>
// )
// }

// export default Card;

