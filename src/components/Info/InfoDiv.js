import React from "react";
import InfoDiv from "../Obj";
import classnames from "classnames";

function createInfoDiv(props){
    const linkClass= classnames("fab", "fa-linkedin", "Icon")
    const ghClass= classnames("fab", "fa-github", "Icon")
    const style ={
        marginTop : "5%",
    }

    const aboutstyle={color: "darkslategray", fontSize: "1.1rem", marginTop : "5%"}
    return(
        <div style={style}>
            <h3><q style={{color: "darkslategray"}}>{props.Quote}</q></h3>
            <p>{props.Quoteby}</p>
            <p style={aboutstyle} ><em>{props.Description}</em></p>
            <p><span>Location: </span>{props.Location}</p>
            <p><span>Things i love: </span>{props.Love}</p>
            <p style={style}>
                <a href = {props.Linkedin}><i className= {linkClass}></i></a> 
                <a href = {props.Github}><i className={ghClass}></i></a>
            </p>
            
            
           
        </div>
    );
}

function createEducationDiv(props){
    const style ={
        marginTop : "5%",
    }
    return(
        <div style={style}>
            <h4><q style={{color: "darkslategray"}}>{props.Quote}</q></h4>
            <p>{props.Quoteby}</p>
            <p style={style}><span>{props.Degree}</span> {props.Time}</p>
            <p><span>{props.School}</span></p>
            <p>{props.Location}</p>
        </div>
    );
}

function About(props){
    return (
        <div id={props.id} className = {props.className}>
            <InfoDiv aboutme = {props.aboutme} title = {props.title} func={props.func}/>
        </div>
    );
}

export default About;
export {createInfoDiv, createEducationDiv};