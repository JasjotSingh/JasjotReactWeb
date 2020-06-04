import React from "react";
import Heading from "./Heading"

function InfoDiv(props){
    return(
        <div>
            <Heading title = {props.title} />
            <hr></hr>
            {props.func(props.aboutme)}
        </div> 
    );
}

export default InfoDiv;