import React from "react";
import InfoDiv from "./InfoDiv"

function createInfoDiv(props){
    return(
        <div>
            <p><span>{props.Name}</span></p>
            <p><span>LinkedIn: </span><a href = {props.Linkedin}>{props.Linkedin}</a>  <span>GitHub: </span><a href = {props.Linkedin}>{props.Github}</a></p>
            <p>{props.Location}</p>
            <p><span>About me: </span> {props.Description}</p>
            <p><span>Things i love: </span> {props.Love}</p>
        </div>
    );
}

function createEducationDiv(props){
    return(
        <div>
            <p><span>{props.Degree}</span> {props.Time}</p>
            <p><span>{props.School}</span></p>
            <p>{props.Location}</p>
        </div>
    );
}

function About(props){
    return (
        <div className = {props.className}>
            <InfoDiv aboutme = {props.aboutme} title = {props.title} func={props.func}/>
        </div>
    );
}

export default About;
export {createInfoDiv, createEducationDiv};