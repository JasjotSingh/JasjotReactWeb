import React from "react";
import Heading from "./Heading/Heading";


function Obj(props){
    return (
        <div id={props.id} className = {props.className} >
            <Heading title = {props.title} />
            <hr></hr>
            {props.func(props.aboutme)}
        </div>
    );
}

export default Obj;
