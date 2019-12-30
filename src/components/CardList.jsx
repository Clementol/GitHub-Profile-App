import React from "react";
import Card from "./Card.jsx";
const CardList = (props) => {
    return(
        <div>
            {props.profiles.map((prof, index)=> <Card {...prof} key={index} />)}
        </div>
    );  
}
export default CardList;